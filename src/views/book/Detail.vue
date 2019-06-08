<template>
  <div>
    <div class="style-backSize">
      <h2 class="style-h3">{{ book.title }}</h2>
      <br />
      <img :src="attachImageUrl(book.cover)" />
      <a-divider dashed orientation="left">内容简介</a-divider>
      <p class="style-p">{{ book.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookDetail',
  data() {
    const book = {};
    return {
      book
    };
  },
  mounted() {
    this.fetchBookDetail(this.$route.params.id, this.$route.query);
  },
  computed: {},
  methods: {
    fetchBookDetail(id, kwargs) {
      this.$requests({
        url: `/api/e-book/${id}`,
        methods: 'get',
        params: kwargs
      }).then(response => {
        this.book = response;
      });
    },
    attachImageUrl(srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(
          /http\w{0,1}:\/\//g,
          'https://images.weserv.nl/?url='
        );
      }
    }
  }
};
</script>

<style scoped>
.style-detail {
  padding: 0 10px;
  margin-top: 10px;
}
.style-backSize {
  background-color: white;
}
.style-h3 {
  padding: 20px;
  text-align: left;
}
.style-p {
  padding: 0px 20px 20px 20px;
  text-align: left;
}
.style-qrcode {
  padding: 0 10px;
  margin-top: 10px;
}
</style>
