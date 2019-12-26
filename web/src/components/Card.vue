<template>
<!-- 封装卡片头部 -->
    <div class="card bg-white mt-3 pb-3">
        <div class="card-header d-flex py-3 mx-3 ">
            <i class="iconfont" :class="`icon-${icon}`"></i>
            <div class="nav-link flex-1 px-2 fs-xl">{{title}}</div>
            <i class="iconfont icon-more"></i>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/_tempCss.scss';
.card {
  .card-header {
    border-bottom: 1px solid $border-color;
  }
  border-bottom: 1px solid $border-color;
}
</style>


