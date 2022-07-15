<template>
  <div v-if="posts.length > 0">
    <h3>Список постов:</h3>
    <TransitionGroup name="list">
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </TransitionGroup>
  </div>
  <div v-else>
    <h3>Создайте пост!</h3>
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
h3 {
  padding: 10px;
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}
</style>