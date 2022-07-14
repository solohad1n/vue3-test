<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Btn",
};
</script>

<style>
.btn {
  padding: 5px 25px;
  background: none;
  color: teal;
  border: 2px solid teal;
  text-align: center;
}
.btn:hover {
  border: 2px solid rgb(128, 119, 0);
  color: rgb(128, 119, 0);
}
</style>