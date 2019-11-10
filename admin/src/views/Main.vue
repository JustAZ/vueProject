<template>
    <el-container style="height: 100vh; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu router :default-openeds="['1']" unique-opened :default-active="$route.path">
                <!--router 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转	 -->
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-message"></i>内容管理</template>
                    <el-menu-item-group>
                        <template slot="title">物品</template>
                        <el-menu-item index="/item/create">新建物品</el-menu-item>
                        <el-menu-item index="/item/list">物品列表</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">英雄</template>
                        <el-menu-item index="/hero/create">新建英雄</el-menu-item>
                        <el-menu-item index="/hero/list">英雄列表</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">文章</template>
                        <el-menu-item index="/articles/create">新建文章</el-menu-item>
                        <el-menu-item index="/articles/list">文章列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-message"></i>运营管理</template>
                    <el-menu-item-group>
                        <template slot="title">广告</template>
                        <el-menu-item index="/ads/create">广告管理</el-menu-item>
                        <el-menu-item index="/ads/list">广告列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-message"></i>系统设置</template>
                    <el-menu-item-group>
                        <template slot="title">分类</template>
                        <el-menu-item index="/categoties/create">新建分类</el-menu-item>
                        <el-menu-item index="/categoties/list">分类列表</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">管理员</template>
                        <el-menu-item index="/admin/create">新建管理员</el-menu-item>
                        <el-menu-item index="/admin/list">管理员列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>


<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data() {
    return {}
  }
}
</script>