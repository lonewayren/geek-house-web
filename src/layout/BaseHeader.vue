<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo"></div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['book']"
        class="heaer-menu"
        @click="switchMenu"
      >
        <a-menu-item key="book"><a-icon type="book" />书籍</a-menu-item>
        <a-menu-item key="blog"><a-icon type="edit" />博客</a-menu-item>
        <a-menu-item key="school"><a-icon type="bank" />校招</a-menu-item>
        <a-menu-item key="company"><a-icon type="team" />社招</a-menu-item>
      </a-menu>
    </a-layout-header>
  </a-layout>
</template>

<script>
export default {
  name: 'Header',
  data() {
    const collapsed = false;
    return { collapsed };
  },
  methods: {
    switchMenu({ item, key, keyPath }) {
      const route = keyPath.join('/');
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
.header {
  height: 150px;
  background: #707055 url('../assets/2018011205474830.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.heaer-menu {
  background: #d0b9b969;
  border-bottom: 0px;
  font-weight: 900;
}
.logo {
  width: 45%;
  height: 65%;
  margin-left: 30%;
  margin-right: 30%;
  position: center;
  background-color: #00000000;
  background-image: url('../assets/logo-text.png');
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 100% 100%;
}
.logo p {
  text-align: center;
  color: white;
  font-size: -webkit-xxx-large;
  font-weight: 900;
}
</style>
