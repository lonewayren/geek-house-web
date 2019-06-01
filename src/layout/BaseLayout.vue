<template>
  <a-layout class="ant-layout">
    <BaseHeader></BaseHeader>
    <BaseContent></BaseContent>
    <BaseFooter></BaseFooter>
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
