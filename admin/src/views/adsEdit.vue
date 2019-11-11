<template>
    <div class="categotiesEdit">
        <!-- 通过id来判断是新建还是编辑 -->
        <h1>{{id?'编辑':'新建'}}广告位</h1>
        <el-form @submit.native.prevent label-width="100px">
            <!-- 阻止默认事件,页面跳转 -->
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="广告">
                <el-button type="text" @click="model.items.push({})">
                    <i class="el-icon-plus"></i>添加广告</el-button>
            </el-form-item>

            <el-row type="flex" style="flex-wrap:wrap">
                <ElCol :md="24" v-for="(item,i) in model.items" :key="i">
                    <el-form-item label="跳转连接(url)">
                        <el-input v-model="item.url" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="图片">
                        <el-upload class="avatar-uploader" :action="uploadUrl" :headers="getAuth()" :show-file-list="false" :on-success="res=>$set(item,'image',res.url)">
                            <img v-if="item.image" :src="item.image" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="text" @click="model.items.splice(i,1)" placeholder="">删除</el-button>
                    </el-form-item>
                </ElCol>
            </el-row>
            <!-- <el-form-item label=""></el-form-item> -->
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
      model: {
        items: []
      },
      parent: []
    }
  },
  methods: {
    async save() {
      if (this.id) {
        //更新
        await this.$http.put(`rest/ad/edit/${this.id}`, this.model)
      } else {
        //保存
        // console.log(this.model.id)
        this.$delete(this.model, '_id')

        await this.$http.post('rest/ad', this.model)
      }
      console.log(this.model.name)
      this.$router.push('/ads/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },

    async editFetch() {
      //获取
      const res = await this.$http.get(`rest/ads/${this.id}`)
      this.model = Object.assign({}, this.model, res.data)
    }
  },
  created() {
    // this.id &&
    this.id && this.editFetch()
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
