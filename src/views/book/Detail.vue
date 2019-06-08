<template>
  <div>
    {{ this.$route.params.id }}
    {{ book }}
    图书详情
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
    }
  }
};
</script>

<style scoped></style>
