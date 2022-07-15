<template>
  <h1>Страница с постами:</h1>
  <Btn @click="showDialog">добавить пост:</Btn>
  <my-dialog v-model:show="dialogVisible">
    <PostForm @asd="createPost" />
  </my-dialog>
  <PostList @remove="removePost" :posts="posts" />
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "Заголовок 1", body: "Тело нашего поста 1" },
        { id: 2, title: "Заголовок 2", body: "Тело нашего поста 2" },
        { id: 3, title: "Заголовок 3", body: "Тело нашего поста 3" },
        { id: 4, title: "Заголовок 4", body: "Тело нашего поста 4" },
      ],
      dialogVisible: false,
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
  },
  components: { PostForm, PostList },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>