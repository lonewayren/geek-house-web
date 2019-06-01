<template>
  <div>
    <a-breadcrumb :routes="routes">
      <template slot="itemRender" slot-scope="{ route, params, paths }">
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
  data() {
    const routes = this.$store.state.breadListState;
    return {
      routes
    };
  }
};
</script>

<style scoped></style>
