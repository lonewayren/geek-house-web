<template>
  <a-card style="margin-left: 20px; margin-top: 10px;border-radius: 8px">
    <a-list
      :grid="{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 4, xl: 4, xxl: 4 }"
      :data-source="workList"
    >
      <a-list-item
        slot="renderItem"
        slot-scope="item"
        key="item.title"
        bordered="true"
        style="border: #afa991 1px"
      >
        <a-badge>
          <icon-font
            slot="count"
            :title="item.hot ? '进行中...' : '已结束...'"
            :type="item.hot ? 'icon-jinhangzhong' : 'icon-ending'"
            style="font-size: 40px"
          ></icon-font>
          <a-card hoverable class="custom-card-style" @click="goSociety(item)">
            <div :title="item.title">
              <icon-font
                class="custom-svg-style"
                :type="item.company.logo"
              ></icon-font>
            </div>
          </a-card>
        </a-badge>
      </a-list-item>
    </a-list>
  </a-card>
</template>

<script>
export default {
  name: 'SchoolList',
  data() {
    return {
      workList: []
    };
  },
  mounted() {
    this.fetchSchoolWorkList();
  },
  methods: {
    goSociety(item) {
      window.open(item.href, '_blank');
    },
    fetchSchoolWorkList(kwargs) {
      this.$requests({
        url: '/api/school/work',
        method: 'get',
        params: kwargs
      }).then(result => {
        const { results } = result;
        this.workList = results;
      });
    }
  }
};
</script>

<style scoped>
.custom-svg-style >>> svg {
  width: 165px;
  height: 110px;
}
.custom-card-style >>> .ant-card-body {
  padding: 10px 10px;
  bottom: 0;
}
</style>
