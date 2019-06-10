<template>
  <a-card
    hoverable
    key="qrcode"
    style="border-radius: 8px"
    :body-style="{
      padding: '5px',
      background: '#ffffff00'
    }"
  >
    <div style="height: 45%;width: 45%;float: left;text-align: center;">
      <p style="margin-top:15%">
        欢迎关注<br />
        <b>极客学舍</b><br />
        公众号
      </p>
      <p>获取万本电子书</p>
    </div>
    <div style="height: 45%;width: 45%;float: right;text-align: center;">
      <img
        src="../assets/qrcode.jpg"
        alt="welcome"
        style="height: 100%%;width: 100%;margin-top:10%"
      />
    </div>
  </a-card>
</template>

<script>
export default {
  name: 'Qrcode'
};
</script>

<style scoped></style>
