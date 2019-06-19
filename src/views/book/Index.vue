<template>
  <div>
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'BookIndex'
};
</script>

<style scoped></style>
