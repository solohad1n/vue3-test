<template>
  <div class="form-post">
    <form @submit.prevent>
      <h2>Создать пост:</h2>
      <input v-model="post.title" type="text" placeholder="Название:" />
      <input v-model="post.body" type="text" placeholder="Описание:" />
      <button @click="createPost">Создать</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("asd", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
.form-post {
  margin: 0 0 50px 0;
}
form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  text-align: center;
  margin: auto;
}
</style>