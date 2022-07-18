<template>
  <div class="post">
    <div>
      {{ post.id }}
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btn">
      <Btn @click="$router.push(`/posts/${post.id}`)">Открыть</Btn>
      <Btn @click="$emit('remove', post)">Удалить</Btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.post {
  padding: 15px;
  border: 3px solid teal;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btn {
  display: flex;
}
</style>