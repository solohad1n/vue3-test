<template>
  <h2>Страница поста с ID = {{ $route.params.id }}</h2>
  <div><strong>Название:</strong> {{ $route.params.title }}</div>
  <div><strong>Описание:</strong> {{ $route.params.body }}</div>
</template>

<script>
export default {};
</script>

<style>
</style>