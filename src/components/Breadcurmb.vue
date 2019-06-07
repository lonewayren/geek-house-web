<template>
  <div>
    <a-breadcrumb :routes="routes">
      <template slot="itemRender" slot-scope="{ route }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ route.name }}
        </span>
        <router-link v-else :to="route.path">
          {{ route.name }}
        </router-link>
      </template>
    </a-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcurmb',
  // data() {
  //   const routes = this.$store.state.breadListState;
  //   return {
  //     routes
  //   };
  // },
  computed: {
    routes() {
      let BreadcurmbList = [{ name: '首页', path: '/' }];
      this.$route.matched.forEach(function(item) {
        if (item.path !== '') {
          BreadcurmbList.push({
            name: item.name,
            path: item.path
          });
        }
      });
      return BreadcurmbList;
    }
  }
};
</script>

<style scoped></style>
