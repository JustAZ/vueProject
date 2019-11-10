<template>
    <div class="categotiesEdit">
        <!-- 通过id来判断是新建还是编辑 -->
        <h1>{{id?'编辑':'新建'}}用户</h1>
        <el-form @submit.native.prevent label-width="100px">
            <!-- 阻止默认事件,页面跳转 -->
            <el-form-item label="用户名">
                <el-input v-model="model.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="model.password"></el-input>
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
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      parent: []
    }
  },
  methods: {
    async save() {
      if (this.id) {
        //更新
        await this.$http.put(`rest/adminUser/edit/${this.id}`, this.model)
      } else {
        //保存
        // console.log(this.model.id)
        this.$delete(this.model, '_id')

        await this.$http.post('rest/adminUser', this.model)
      }
      console.log(this.model.name)
      this.$router.push('/admin/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },

    async editFetch() {
      //获取
      const res = await this.$http.get(`rest/adminUser/${this.id}`)
      this.model = res.data
    },
    async fetchParent() {
      const res = await this.$http.get('rest/adminUser')
      this.parent = res.data
      console.log(res.data)
    }
  },
  created() {
    // this.id &&
    this.id && this.editFetch()
    this.fetchParent()
  },
  mounted() {
    console.log(this.model.name)
  },
  watch: {
      $route(to,from){
          to,from
          this.model = {}
      }
  }
}
</script>
