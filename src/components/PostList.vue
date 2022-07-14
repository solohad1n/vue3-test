<template>
  <div>
    <h3>Список:</h3>
    <PostItem v-for="post in posts" :key="post" :post="post" />
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: { PostItem },
};
</script>

<style scoped>
</style>