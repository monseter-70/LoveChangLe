<template>
  <div>
    <!--这是头部-->
    <toplabel top="true"></toplabel>
    <div><hotlabel></hotlabel></div>
    <!--这是底部-->
    <div>
      <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="wap-home-o">政务</van-tabbar-item>
        <van-tabbar-item icon="info-o">问政</van-tabbar-item>
        <van-tabbar-item icon="bookmark-o">服务</van-tabbar-item>
        <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import hotlabel from "@/components/homelabel/hotlabel.vue";
import toplabel from "@/components/homelabel/hometop.vue";
export default {
  data() {
    return {
      
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      }
    };
  },
  components: {
    toplabel,
    hotlabel
  }
};
</script>

<style>
</style>