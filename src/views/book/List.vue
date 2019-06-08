<template>
  <a-card style="margin-left: 20px; margin-top: 10px;border-radius: 8px">
    <a-list
      :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 6 }"
      :data-source="bookList"
      :pagination="{
        onChange: changePage,
        showQuickJumper: true,
        pageSize: pageSize,
        current: currentPage,
        total: bookListTotal,
        showTotal: total => `共 ${total} 本`
      }"
    >
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-card
          hoverable
          :key="index"
          :loading="loading"
          @click="getBookDetail(item)"
          :body-style="{
            padding: '5px',
            height: '120px',
            background: '#ffffff00'
          }"
        >
          <img
            :alt="item.title"
            :src="attachImageUrl(item.cover)"
            slot="cover"
            style="height:200px;width: 100%;"
          />
          <a-card-meta style="padding: 0px;margin: 0px">
            <p
              slot="title"
              :title="item.title"
              style="font-size: 14px;color: #00a67c;margin-bottom: 0;;white-space: normal;
                  border-bottom: #afa991 dashed 1px;
                  height: 45px;
                  overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;"
            >
              {{ item.title }}
            </p>
            <p
              slot="description"
              :title="item.description"
              style="overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;text-indent: 2em"
            >
              {{ item.description }}
            </p>
          </a-card-meta>
        </a-card>
      </a-list-item>
    </a-list>
  </a-card>
</template>

<script>
export default {
  components: {},
  name: 'BookList',
  data() {
    return {
      bookList: [],
      bookListTotal: 0,
      loading: false,
      pageSize: 24
    };
  },
  mounted() {
    this.fetchBookList({ size: this.pageSize });
  },
  computed: {
    currentPage() {
      return this.$route.query.page ? parseInt(this.$route.query.page) : 1;
    }
  },
  methods: {
    // 图片防盗链问题解决
    attachImageUrl(srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(
          /http\w{0,1}:\/\//g,
          'https://images.weserv.nl/?url='
        );
      }
    },
    changePage(page) {
      this.loading = true;
      this.fetchBookList({ page: page, size: this.pageSize });
      this.loading = false;
      this.$router.push({ query: { page: page } });
    },
    fetchBookList(kwargs) {
      this.$requests({
        url: '/api/e-book',
        methods: 'get',
        params: kwargs
      }).then(result => {
        const { count, results } = result;
        this.bookList = results;
        this.bookListTotal = count;
      });
    },
    getBookDetail(item) {
      this.$router.push(`/book/${item.id}`);
      // this.$router.push({name:'bookDetail', params:item});
    }
  }
};
</script>

<style scoped></style>
