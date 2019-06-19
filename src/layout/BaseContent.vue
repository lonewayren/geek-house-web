<template>
  <a-layout-content>
    <Breadcurmb class="breadcurmb"></Breadcurmb>
    <a-layout style="margin: 10px 20px; ;border-radius: 8px;">
      <router-view v-wechat-title="$route.meta.title"></router-view>
    </a-layout>
  </a-layout-content>
</template>

<script>
import Breadcurmb from '../components/Breadcurmb';
export default {
  name: 'Content',
  components: {
    Breadcurmb
  }
};
</script>

<style scoped>
.breadcurmb {
  text-align: left;
  padding-left: 20px;
  padding-top: 10px;
}
</style>
