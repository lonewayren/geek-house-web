<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo"></div>
      <div class="header-menu">
        <!--        <a-button-->
        <!--          type="primary"-->
        <!--          @click="toggleCollapsed"-->
        <!--          style="position: absolute; left: 0px"-->
        <!--        >-->
        <!--          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />-->
        <!--        </a-button>-->
        <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="['book']"
          :selected-keys="selectKeys"
          @click="switchMenu"
          class="header-menu"
          :inlineCollapsed="collapsed"
        >
          <a-menu-item key="book"><a-icon type="book" />书籍</a-menu-item>
          <a-menu-item key="http://loneway.vicp.io/blog/">
            <a-icon type="edit" />博客</a-menu-item
          >
          <a-menu-item key="school"><a-icon type="bank" />校招</a-menu-item>
          <a-menu-item key="society"><a-icon type="team" />社招</a-menu-item>
        </a-menu>
      </div>
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
  computed: {
    selectKeys() {
      if (this.$route.matched.length) {
        const key = this.$route.matched[0].path.split('/')[1];
        return [key];
      }
      return [];
    }
  },
  methods: {
    switchMenu({ keyPath }) {
      const route = keyPath.join('/');
      if (route.startsWith('http')) {
        window.location.href = route;
      } else {
        this.$router.push('/' + route);
      }
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>

<style scoped>
.header {
  height: 150px;
  background: #707055 url('../assets/banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.header-menu {
  background: rgba(208, 185, 185, 0.19);
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
