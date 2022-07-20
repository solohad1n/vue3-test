<template>
  <div class="containet">
    <h1>{{ likes + 10 }}</h1>
    <Btn @click="addLikes"></Btn>
    <h1>Страница с постами:</h1>
    <MyInput placeholder="Поиск..." v-model="searchQuery" />
    <div class="app__btn">
      <Btn>добавить пост:</Btn>
      <MySelect v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <PostForm />
    </my-dialog>
    <div>
      <PostList
        :posts="sortedAndSearchedPosts"
        v-if="!isPostLoading === true"
      />
      <div v-else>Loading...</div>
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
import MySelect from "@/components/UI/MySelect.vue";
import { ref } from "@vue/reactivity";
import { usePosts } from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
export default {
  components: { PostForm, PostList, MySelect },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: "title", name: "По Названию" },
        { value: "body", name: "По Описанию" },
      ],
    };
  },
  setup(props) {
    const { posts, totalPages, isPostLoading } = usePosts(10);
    const { selectedSort, sortedPosts } = useSortedPosts(posts);
    const { sortedAndSearchedPosts, searchQuery } =
      useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      totalPages,
      isPostLoading,
      selectedSort,
      sortedPosts,
      sortedAndSearchedPosts,
      searchQuery,
    };
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