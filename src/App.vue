<template>
  <div class="containet">
    <h1>Страница с постами:</h1>
    <div class="app__btn">
      <Btn @click="showDialog">добавить пост:</Btn>
      <MySelect v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <PostForm @asd="createPost" />
    </my-dialog>
    <PostList
      @remove="removePost"
      :posts="selectedSort"
      v-if="!isPostLoading === true"
    />
    <div v-else>Loading...</div>
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
      selectedSort: "",
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
  computed: {
    selectedSort() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
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
</style>