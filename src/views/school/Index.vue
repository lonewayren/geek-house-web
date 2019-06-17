<template>
  <div>
    <a-col :span="18">
      <router-view></router-view>
    </a-col>
    <a-col :span="6" class="qrcode"><Qrcode></Qrcode></a-col>
  </div>
</template>

<script>
import Qrcode from '../../components/Qrcode';
export default {
  components: {
    Qrcode
  },
  name: 'SchoolIndex'
};
</script>

<style scoped>
.qrcode {
  padding: 0 10px;
  margin-top: 10px;
}
</style>
