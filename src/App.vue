<template>
  <div class="containet">
    <h1>Страница с постами:</h1>
    <MyInput placeholder="Поиск..." v-model="searchQuery" />
    <div class="app__btn">
      <Btn @click="showDialog">добавить пост:</Btn>
      <MySelect v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <PostForm @asd="createPost" />
    </my-dialog>
    <PostList
      @remove="removePost"
      :posts="sortedAndSearchedPosts"
      v-if="!isPostLoading === true"
    />
    <div v-else>Loading...</div>
    <div class="page__wrapper">
      <div
        :class="{ 'current-page': page === pageNumber }"
        class="page"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import axios from "axios";
import MySelect from "./components/UI/MySelect.vue";
export default {
  components: { PostForm, PostList, MySelect },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      page: 1,
      limit: 10,
      totalPages: 0,
      selectedSort: "",
      searchQuery: "",
      sortOptions: [
        { value: "title", name: "По Названию" },
        { value: "body", name: "По Описанию" },
      ],
    };
  },
  methods: {
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
    changePage(pageNumber) {
      this.page = pageNumber;
    },
    async fetchPost() {
      try {
        this.isPostLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (e) {
        alert("Ошибка вывода массива данных!");
      } finally {
        this.isPostLoading = false;
      }
    },
  },
  watch: {
    page() {
      this.fetchPost();
    },
  },
  mounted() {
    this.fetchPost();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
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
</style>