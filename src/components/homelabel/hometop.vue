<template>
  <div>
    <van-nav-bar v-show="top" class="aaaaa" left-arrow>
      <template #left>
        <van-image width="45" height="45" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </template>
      <template #title>

       <i style=" font-size: 15px;position: absolute;top:15px;"  class="      el-icon-search"></i>
       
        <input style=" padding-left :20px;border:0x p;border-radius: 100px;width:12.5rem; z-index:999 "  placeholder="输入要搜索的内容" />
      </template>
      <template #right style="z-index:1">
        <i style=" font-size: 25px;" class="el-icon-refresh-right"></i>
      </template>
    </van-nav-bar>

    <van-nav-bar v-show="name" title="标题" left-text="返回" right-text="按钮" left-arrow />
  </div>
</template>

<script>
export default {
  props: ["top", "name"],
  input: ""
};
</script>

<style>
.aaaaa {
  background: #409eff;

}
</style>