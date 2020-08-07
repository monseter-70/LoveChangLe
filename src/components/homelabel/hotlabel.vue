<template>
  <div>
    <van-tabs>
      <van-tab v-for="net in Netease" :title="net. name" :key="net.index">
      <labels :diz="net.url" :zhuangt="net.zhuangt" ></labels>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import labels from "./label";
export default {
  components:{labels},
  data() {
    return {
      Netease: [
        {
          name: "新闻",
          url: "https://mock.yonyoucloud.com/mock/14236/lovechangle/home",
          zhuangt:"home"

        },
        {
          name: "娱乐",
          url: "https://mock.yonyoucloud.com/mock/14236/lovechangle/recreation",
          zhuangt:"recreation"

        },
        {
          name: "财经",
          url: "https://mock.yonyoucloud.com/mock/14236/lovechangle/finance",
          zhuangt:"finance"

        },
        {
          name: "军事",
          url: "https://mock.yonyoucloud.com/mock/14236/lovechangle/military",
          zhuangt:"military"

        },
        {
          name: "科技",
          url: "https://mock.yonyoucloud.com/mock/14236/lovechangle/science",
          zhuangt:"science"

        },
        {
          name: "手机",
          url: "https://mock.yonyoucloud.com/mock/14236/lovechangle/mobile",
          zhuangt:"mobile"

        },
        {
          name: "数码",
          url: "https://mock.yonyoucloud.com/mock/14236/lovechangle/numericalcode",
          zhuangt:"numericalcode "

        }
      ]
    };
  }
};
</script>

<style>
</style>