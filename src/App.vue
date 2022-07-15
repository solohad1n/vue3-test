<template>
  <h1>Страница с постами:</h1>
  <Btn @click="showDialog">добавить пост:</Btn>
  <my-dialog v-model:show="dialogVisible">
    <PostForm @asd="createPost" />
  </my-dialog>
  <PostList
    @remove="removePost"
    :posts="posts"
    v-if="!isPostLoading === true"
  />
  <div v-else>Loading...</div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import axios from "axios";
export default {
  components: { PostForm, PostList },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
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
    async fetchPost() {
      try {
        this.isPostLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
      } catch (e) {
        alert("Ошибка вывода массива данных!");
      } finally {
        this.isPostLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPost();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>