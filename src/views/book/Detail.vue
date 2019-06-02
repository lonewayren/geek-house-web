<template>
  <div>
    {{ this.$route.params.id }}
    图书详情
  </div>
</template>

<script>
export default {
  name: 'BookDetail',
  mounted() {
    console.log(this.$route.params);
  }
};
</script>

<style scoped></style>
