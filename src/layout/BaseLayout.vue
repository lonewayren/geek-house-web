<template>
  <a-layout class="ant-layout">
    <BaseHeader style="height: 20vh;"></BaseHeader>
    <BaseContent style="min-height: 70vh"></BaseContent>
    <BaseFooter style="min-height: 10vh"></BaseFooter>
  </a-layout>
</template>

<script>
import BaseFooter from './BaseFooter';
import BaseHeader from './BaseHeader';
import BaseContent from './BaseContent';

export default {
  name: 'BaseLayout',
  components: { BaseFooter, BaseHeader, BaseContent }
};
</script>

<style scoped></style>
