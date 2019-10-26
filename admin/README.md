#10/23
+ 项目初始化 web admin serve
+ 后台管理系统的架构搭建,基于element
    + vue的子路由可以有 '/' 绝对路径 也可以不加
    + @submit.native.prevent 阻止默认事件,阻止提交表单跳转,native表示原生,渲染为时html
#10/26
+ router-view复用组件不刷新;使用 watch监听路由变化手动更改清除数据
    + https://www.cnblogs.com/goloving/p/9005130.html
+ 统一风格的restful接口,动态匹配路由分配资源
+ express的链式处理,中间件操作
+ 上传图片,action表单提交到后台,后端保存这个图片,返回url给前端
+ node利用中间件multer处理文件数据


# admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
