<template>
  <div class="style-detail">
    <div>
      <a-card
        hoverable
        key="qrcode"
        style="border-radius: 8px"
        :body-style="{ padding: '5px', background: '#ffffff00' }"
      >
        <h2 class="style-h3">{{ book.title }}</h2>
        <br />
        <img :src="attachImageUrl(book.cover)" class="style-cover" />
        <a-divider dashed orientation="left">内容简介</a-divider>
        <p class="style-p">{{ book.description }}</p>
      </a-card>
    </div>
    <div class="style-buttonCard">
      <a-card
        hoverabl
        key="qrcode"
        style="border-radius: 8px"
        :body-style="{ padding: '5px', background: '#ffffff00' }"
      >
        <div style="float:right;width:30%;">
          <img
            src="@/assets/qrcode.jpg"
            alt="welcome"
            style="height:70%;width:70%;padding:20px"
          />
        </div>
        <div style="float:left;width:70%;text-align:left;align-content:center;">
          <h3 style="padding-top:25px;padding-left:20px;color:red;">
            提取密码已经被隐藏，输入验证码即可查看！(建议使用Chrome内核的浏览器)
          </h3>
          <div style="width:60%;padding-left:20px;">
            <a-input-search
              placeholder=""
              @search="onSearch"
              enter-button="提交查看"
              size="large"
            ></a-input-search>
          </div>
          <p style="padding-top:20px;padding-left:20px">
            由于本站电子书资源经常不定期更新，为了让书友们第一时间收到更新信息，本站已开通微信公众号微信扫描右侧二维码关注后点击菜单栏"
            <b style="color:red;">验证码</b>"， 即可获取验证码！
          </p>
        </div>
      </a-card>
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
    },
    onSearch() {}
  }
};
</script>

<style scoped>
.style-detail {
  padding: 10px 0px 10px 20px;
}
.style-h3 {
  padding: 20px;
  text-align: left;
}
.style-cover {
  width: 40%;
  height: 40%;
}
.style-p {
  padding: 0px 20px;
  text-indent: 2em;
  text-align: left;
}
.style-buttonCard {
  margin-top: 10px;
}
.style-qrcode {
  padding: 0 10px;
  margin-top: 10px;
}
</style>
