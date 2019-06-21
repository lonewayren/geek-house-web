<template>
  <a-layout>
    <a-layout-header class="header">
      <div>
        <div><a-icon class="logo"></a-icon></div>
        <div>
          <a-menu
            theme="dark"
            mode="horizontal"
            :default-selected-keys="['book']"
            :selected-keys="selectKeys"
            @click="switchMenu"
            style=""
          >
            <a-menu-item key="book"><a-icon type="book" />书籍</a-menu-item>
            <a-menu-item key="blog"> <a-icon type="edit" />博客</a-menu-item>
            <a-menu-item key="school"><a-icon type="bank" />校招</a-menu-item>
            <a-menu-item key="society"><a-icon type="team" />社招</a-menu-item>
          </a-menu>
        </div>
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
      let route = keyPath.join('/');
      if (route === 'blog') {
        route = 'http://blog.loneway.ren/blog/';
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
  height: 20vh;
  background: #707055 url('../assets/banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10px;
}
.header-menu {
  /*background: rgba(208, 185, 185, 0.19);*/
  /*border-bottom: 0px;*/
  /*font-weight: 900;*/
  margin-bottom: 10px;
}
.logo {
  width: 100vw;
  max-width: 500px;
  height: 50px;
  text-align: center;
  background-color: #00000000;
  background-image: url('../assets/logo-text.png');
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 100% 100%;
}
/*.logo p {*/
/*  text-align: center;*/
/*  color: white;*/
/*  font-size: -webkit-xxx-large;*/
/*  font-weight: 900;*/
/*}*/
</style>
