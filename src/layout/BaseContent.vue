<template>
  <a-layout-content>
    <Breadcurmb class="breadcurmb"></Breadcurmb>
    <router-view></router-view>
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
