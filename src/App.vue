<template>
  <PostForm @asd="createPost" />
  <PostList :posts="posts" />
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
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
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