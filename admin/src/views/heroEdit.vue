<template>
    <div class="itemEdit">
        <!-- 通过id来判断是新建还是编辑 -->
        <h1>{{id?'编辑':'新建'}}英雄</h1>
        <el-form @submit.native.prevent label-width="100px">
            <!-- 阻止默认事件,页面跳转 -->
            <el-tabs type="border-card" value="skills">
                <ElTabPane label="基础信息">
                    <el-form-item label="名称">
                        <el-input v-model="model.name"></el-input>
                    </el-form-item>
                    <el-form-item label="图片上传">
                        <el-upload class="avatar-uploader" :action="$http.defaults.baseURL+'/upload'" :show-file-list="false" :on-success="handleAvatarSuccess">
                            <img v-if="model.img" :src="model.img" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="称号">
                        <el-input v-model="model.title" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="类型">
                        <el-select v-model="model.categories" placeholder="" multiple>
                            <ElOption v-for="item of categories" :key="item._id" :label="item.name" :value="item._id"></ElOption>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="难度">
                        <el-rate :max="9" show-score style="margin-top:0.6rem" v-model="model.scores.difficult" placeholder=""></el-rate>
                    </el-form-item>
                    <el-form-item label="技能">
                        <el-rate :max="9" show-score style="margin-top:0.6rem" v-model="model.scores.skills" placeholder=""></el-rate>
                    </el-form-item>
                    <el-form-item label="攻击">
                        <el-rate :max="9" show-score style="margin-top:0.6rem" v-model="model.scores.attack" placeholder=""></el-rate>
                    </el-form-item>
                    <el-form-item label="生存">
                        <el-rate :max="9" show-score style="margin-top:0.6rem" v-model="model.scores.survice" placeholder=""></el-rate>
                    </el-form-item>
                    <el-form-item label="顺风出装">
                        <el-select v-model="model.items1" placeholder="" multiple>
                            <ElOption v-for="item of items" :key="item._id" :label="item.name" :value="item._id"></ElOption>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="逆风出装">
                        <el-select v-model="model.items2" placeholder="" multiple>
                            <ElOption v-for="item of items" :key="item._id" :label="item.name" :value="item._id"></ElOption>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="使用技巧">
                        <el-input v-model="model.usageTips" type="textarea" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="对抗技巧">
                        <el-input v-model="model.battleTips" type="textarea" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="团战思路">
                        <el-input v-model="model.teamTips" type="textarea" placeholder=""></el-input>
                    </el-form-item>

                </ElTabPane>
                <ElTabPane label="技能" name="skills">
                    <el-button type="text" @click="model.skills.push({})">
                        <i class="el-icon-plus"></i>添加技能</el-button>
                    <el-row type="flex" style="flex-wrap:wrap">
                        <ElCol :md="12" v-for="(item,i) in model.skills" :key="i">
                            <el-form-item label="名称">
                                <el-input v-model="item.name" placeholder=""></el-input>
                            </el-form-item>
                            <el-form-item label="图标">
                                <el-upload class="avatar-uploader" :action="$http.defaults.baseURL+'/upload'" :show-file-list="false" :on-success="res=>$set(item,'icon',res.url)">
                                    <img v-if="item.icon" :src="item.icon" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                            <el-form-item label="描述">
                                <el-input type="textarea" v-model="item.description" placeholder=""></el-input>
                            </el-form-item>
                            <el-form-item label="小提示">
                                <el-input type="textarea" v-model="item.tips" placeholder=""></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="text" @click="model.skills.splice(i,1)" placeholder="">删除</el-button>
                            </el-form-item>
                        </ElCol>
                    </el-row>
                </ElTabPane>
            </el-tabs>
            <el-form-item label="" style="">
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
        tittle: '',
        scores: {
          difficult: 0
        },
        skills: []
      },
      parent: [],
      categories: [],
      items: []
    }
  },
  methods: {
    async save() {
      if (this.id) {
        //更新
        await this.$http.put(`rest/heros/edit/${this.id}`, this.model)
      } else {
        //保存
        // console.log(this.model.id)
        this.$delete(this.model, '_id')

        await this.$http.post('rest/heros', this.model)
      }
      console.log(this.model.name)
      this.$router.push('/hero/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },

    async editFetch() {
      //获取
      const res = await this.$http.get(`rest/heros/${this.id}`)
      this.model = Object.assign({}, this.model, res.data)
    },
    async fetchParent() {
      const res = await this.$http.get('rest/heros')
      this.parent = res.data
      console.log(res.data)
    },
    async fetchCategries() {
      const res = await this.$http.get('rest/categoties')
      this.categories = res.data
      console.log(res.data)
    },
    async fetchItems() {
      const res = await this.$http.get('rest/items')
      this.items = res.data
      console.log(res.data)
    },
    handleAvatarSuccess(res) {
      this.$set(this.model, 'img', res.url)
      console.log(res)
    }
  },
  created() {
    // this.id &&
    this.id && this.editFetch()
    this.fetchCategries()
    this.fetchItems()
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

</style>
