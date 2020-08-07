<template>
  <div>
    <div v-if="zhuangt=='home'">
      <van-swipe  :show-indicators="false" class="my-swipe" :autoplay="3000" >
        <div v-for="(zjs,index) in shuju" :key="zjs.digest">
          <van-swipe-item v-if="index<=5">
            <van-image  width="100%" height="80%" fit="fill" :src="zjs.imgsrc" />
          </van-swipe-item>
        </div>
      </van-swipe>
    </div>
       <div v-if="zhuangt!='home'" style="margin-top: 14%;"></div>
    <div style="margin-top: -14%;">
      <van-card
      v-for="(zj) in shuju" :key="zj.imgsrc"
       
      
      
        :desc="zj.digest"
        :title="zj.title"
        :thumb="zj.imgsrc"
      >
        <template #tags>
          <span>{{zj.source}}</span>&nbsp;
         <span>{{zj.ptime}}</span>
         
        </template>
        <template #footer>
        
        </template>
      </van-card>
    </div>
    <div style="padding-top：20%"><p>aaa</p></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shuju: []
    };
  },
  props: ["diz", "zhuangt"],
  created() {
    this.axios.get(this.diz).then(response => {
      this.shuju = response.data;
      console.log(response.data);
      
    });
  }
};
</script>

<style>

</style>