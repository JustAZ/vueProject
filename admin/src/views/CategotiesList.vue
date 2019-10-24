<template>
    <div class="list">
        <h1>新建分类</h1>
        <el-table :data="dataList" style="width: 100%">
            <el-table-column prop="_id" label="分类id">
            </el-table-column>
            <el-table-column prop="name" label="分类名称">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dataList:[]
        }
    },
    methods: {
        async fetch(){
            const res =await this.$http.get('categoties')
            // console.log(res.data)
            this.dataList = res.data
        }
    },
    created() {
        this.fetch()
    },
}
</script>

