<template>
  <div class="form-post">
    <form @submit.prevent>
      <h2>Создать пост:</h2>
      <MyInput v-model="post.title" type="text" placeholder="Название:" />
      <MyInput v-model="post.body" type="text" placeholder="Описание:" />
      <Btn class="btn-form" @click="createPost">Создать</Btn>
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
.btn-form {
  margin-top: 10px;
}
</style>