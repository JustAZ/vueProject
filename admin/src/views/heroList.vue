<template>
    <div class="list">
        <h1>英雄列表</h1>
        <el-table :data="dataList" style="width: 100%">
            <el-table-column prop="_id" label="分类id">
            </el-table-column>
            
            <el-table-column prop="name" label="名称">
            </el-table-column>
            <el-table-column prop="title" label="称号">
            </el-table-column>
            <el-table-column prop="img" label="英雄图标">
                <template slot-scope="scope">
                   <img :src="scope.row.img" style="width:6rem;height:6rem">
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button type="text" @click='edit(scope.row._id)' size="small">编辑</el-button>
                    <el-button type="text" @click='delCategoty(scope.row)' size="small">删除</el-button>

                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
// import debounce from '../units/deboune'

export default {
  data() {
    return {
      dataList: []
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get('rest/heros')
      // console.log(res.data)
      this.dataList = res.data
    },
    edit(id) {
      this.$router.push(`/hero/create/${id}`)
    },
    /**
     * 删除
     */
    async delCategoty(row) {
      this.$confirm(`是否删除${row.name}?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        await this.$http.delete(`rest/heros/delete/${row._id}`)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.fetch()
      })
    }
  },
  created() {
    this.fetch()
  }
}
</script>

