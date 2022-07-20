<template>
  <div class="containet">
    <h1>Страница с постами:</h1>
    <MyInput
      placeholder="Поиск..."
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
    />
    <div class="app__btn">
      <Btn @click="showDialog">добавить пост:</Btn>
      <MySelect
        :model-value="selectedSort"
        :options="sortOptions"
        @update:model-value="setSelectedSort"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <PostForm @asd="createPost" />
    </my-dialog>
    <div>
      <PostList
        @remove="removePost"
        :posts="sortedAndSearchedPosts"
        v-if="!isPostLoading === true"
      />
      <div v-else>Loading...</div>
    </div>
  </div>
  <div v-intersection="loadMorePosts" class="observer"></div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
import MySelect from "@/components/UI/MySelect.vue";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  components: { PostForm, PostList, MySelect },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.posisPostsLoadingts,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },
};
</script>

<style>
.app__btn {
  display: flex;
  justify-content: space-around;
}
.containet {
  margin: 0 auto;
  max-width: 1200px;
}
h1 {
  text-align: center;
  margin: 0 0 30px 0;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 4px solid green;
}
.observer {
  background: green;
}
</style>