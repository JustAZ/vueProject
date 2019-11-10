<template>
    <el-card header="请先登陆" class="login-card">
        <el-form @submit.native.prevent="login">
            <el-form-item label="用户名">
                <el-input v-model="model.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="model.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">登陆</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>
<script>
export default {
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async login() {
      const res = await this.$http.post('login', this.model)
    //   console.log(res)
      if (res.status == 200) {
        localStorage.token = res.data.token
        this.$router.push('/')
        this.$message({
          type: 'success',
          message: '登陆成功'
        })
      }
    }
  }
}
</script>
<style scoped>
.login-card {
  width: 30rem;
  margin: 5rem auto;
}
</style>


