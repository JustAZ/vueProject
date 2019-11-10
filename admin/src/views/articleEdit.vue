<template>
    <div class="categotiesEdit">
        <!-- 通过id来判断是新建还是编辑 -->
        <h1>{{id?'编辑':'新建'}}文章</h1>
        <el-form @submit.native.prevent label-width="100px">
            <!-- 阻止默认事件,页面跳转 -->
            <el-form-item label="所属分类">
                <el-select v-model="model.categories" multiple>
                    <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标题">
                <el-input v-model="model.title"></el-input>
            </el-form-item>
            <el-form-item label="详情">
                <VueEditor useCustomImageHandler @image-added="handImageAdded" v-model="model.body"></VueEditor>
            </el-form-item>
            <el-form-item label="">
                <el-button type="primary" native-type="submit" @click="save">保存</el-button>
                <!-- native-type表示原生的类型,html的类型为submit -->
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
// 富文本编辑器
import { VueEditor } from 'vue2-editor'

export default {
  props: {
    id: {}
  },
  components: {
    VueEditor
  },
  data() {
    return {
      model: {},
      categories: []
    }
  },
  methods: {
    //默认富文本上传图片是把图片转为base64
    //自定义图片上传格式
    async handImageAdded(file,Editor,cursorLocation,resetUploader) {
        const formData = new FormData();
        formData.append('file',file);
        const res = await this.$http.post('upload',formData);
        Editor.insertEmbed(cursorLocation,"image",res.data.url);
        resetUploader();
    },
    async save() {
      if (this.id) {
        //更新
        await this.$http.put(`rest/articles/edit/${this.id}`, this.model)
      } else {
        //保存
        // console.log(this.model.id)
        this.$delete(this.model, '_id')

        await this.$http.post('rest/articles', this.model)
      }
      console.log(this.model.name)
      this.$router.push('/articles/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },

    async editFetch() {
      //获取
      const res = await this.$http.get(`rest/articles/${this.id}`)
      this.model = res.data
    },
    async fetchParent() {
      const res = await this.$http.get('rest/categoties')
      this.categories = res.data
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
    $route(to, from) {
      to, from
      this.model = {}
    }
  }
}
</script>
