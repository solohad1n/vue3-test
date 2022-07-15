<template>
  <div class="deialog" v-if="show === true" @click.stop="hideDialog">
    <div @click.stop class="deialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-dialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>
.deialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.deialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-width: 360px;
  min-height: 50px;
  padding: 50px;
}
</style>