<template>
    <div class="categotiesEdit">
        <h1>新建分类</h1>
        <el-form @submit.native.prevent>
            <!-- 阻止默认事件,页面跳转 -->
            <el-form-item label="新建分类">
                <el-input v-model="model.name" ></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-button type="primary" native-type="submit" @click="save">保存</el-button>
                <!-- native-type表示原生的类型,html的类型为submit -->
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async save() {
        await this.$http.post('categoties',this.model)
        console.log(this.model.name)
        this.$router.push('/categoties/list')
        this.$message({
            type:'success',
            message:'保存成功'
        })
    }
  }
}
</script>
