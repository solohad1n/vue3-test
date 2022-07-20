<template>
  <div class="navbar">
    <div>
      <Btn @click="$router.push('/posts')">Cписок постов</Btn>
      <Btn @click="$router.push('/')">Главная страница</Btn>
      <Btn @click="$router.push('/store')">VueX</Btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: rgba(0, 255, 255, 0.299);
  box-shadow: 2px 2px 4px gray;
}
.navbar div {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}
</style>