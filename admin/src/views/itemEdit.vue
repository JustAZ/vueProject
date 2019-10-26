<template>
    <div class="itemEdit">
        <!-- 通过id来判断是新建还是编辑 -->
        <h1>{{id?'编辑':'新建'}}物品</h1>
        <el-form @submit.native.prevent label-width="100px">
            <!-- 阻止默认事件,页面跳转 -->
            <el-form-item label="物品名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="图片上传">
                <el-upload class="avatar-uploader" :action="$http.defaults.baseURL+'/upload'" :show-file-list="false" :on-success="handleAvatarSuccess">
                    <img v-if="model.img" :src="model.img" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
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
        await this.$http.put(`rest/item/edit/${this.id}`, this.model)
      } else {
        //保存
        // console.log(this.model.id)
        this.$delete(this.model, '_id')

        await this.$http.post('rest/item', this.model)
      }
      console.log(this.model.name)
      this.$router.push('/item/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },

    async editFetch() {
      //获取
      const res = await this.$http.get(`rest/item/${this.id}`)
      this.model = res.data
    },
    async fetchParent() {
      const res = await this.$http.get('rest/item')
      this.parent = res.data
      console.log(res.data)
    },
    handleAvatarSuccess(res){
        this.$set(this.model,'img',res.url)
        console.log(res)
    }
  },
  created() {
    // this.id &&
    this.id && this.editFetch()
    // this.fetchParent()
  },
  mounted() {
    console.log(this.model.name)
  },
  watch: {
    $route(to, from) {
      to, from
      this.model = {}
    }
  }
}
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
