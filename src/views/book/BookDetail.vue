<template>
<div>
    <a-col :span="18" class="style-detail">
        <div class="style-backSize">
            <h2 class="style-h3">{{this.detailList.title}}</h2>
            <br>
            <img  :src="attachImageUrl(this.detailList.cover)"/>
            <a-divider dashed orientation="left">内容简介</a-divider>
            <p class="style-p">{{this.detailList.description}}</p>
        </div>
    </a-col>
    <a-col :span="6" class="style-qrcode">
        <Qrcode></Qrcode>
    </a-col>
</div>
</template>

<script>
import Qrcode from '../../components/Qrcode';
export default {
    components: {
    Qrcode
  },
    name:'bookDetail',
    data(){
       return{
           detailList:{},
       };
    },
    created(){
        this.detailList = this.$route.params;
        console.log(this.detailList);
    },
    methods:{
        // 图片防盗链问题解决
    attachImageUrl(srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(
          /http\w{0,1}:\/\//g,
          'https://images.weserv.nl/?url='
        );
      }
    },
    }
}
</script>


<style>
.style-detail{
  padding: 0 10px;
  margin-top: 10px;
}
.style-backSize{
    background-color: white;
}
.style-h3{
    padding: 20px;
    text-align: left;
}
.style-p{
    padding:0px 20px 20px 20px;
    text-align: left;
}
.style-qrcode {
  padding: 0 10px;
  margin-top: 10px;
}
</style>

