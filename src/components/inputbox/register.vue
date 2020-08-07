<template>
  <div class="saa">
    <van-form validate-first >
      <!-- 通过 pattern 进行正则校验 -->
      <van-field 
        v-model="value1"
        label="账号"
        name="pattern"
        placeholder="请输入手机号"
        :rules="[{ pattern, message: '请输入正确的手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="namelogin">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      password: "",
      pattern: /^1[3|4|5|6|7|8|9]\d{9}$/,
      bo: false
    };
  },
  methods: {
    namelogin() {
      this.bo = this.pattern.test(this.value1)?   this.bo=/\S/.test(this.password):this.pattern.test(this.value1);
     
      if (this.bo) {
        this.$store.commit("setLoggingstatus",1);

      }
    }
  }
};
</script>

<style scoped>
.saa{
  width: 90%;
 margin: 0  5%
}
</style>