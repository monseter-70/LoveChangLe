<template>
  <div>
    <div class="main">
      <div class="main-icon">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="main-shou">使用手机号登录</div>
      <register></register>
    </div>
    <div>
      登录即同意
      <a>《用户协议》</a>
      <a>《隐私政策》</a>
    </div>
  </div>
</template>

<script>
import register from "@/components/inputbox/register.vue";
export default {
  components: { register }
};
</script>

<style scoped>
.main{
    width: 100%;
}
.main-icon{
    float: left;
    padding-top: 10px;
   
    font-size: 35px;

}.main-shou{
    padding-top:80px ;
    padding-bottom: 10px;
    font-size: 25px;
    line-height: 30px;
        font-weight: 600;
}
a{
    color: blue;
}
</style>