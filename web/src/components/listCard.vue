<template>
    <!-- 封装卡片头部 -->
    <m-card :title="title" :icon="icon">
        <div class="card-body pt-3">
            <div class="nav jc-between px-3">
                <div class="nav-item " @click="$refs.list.swiper.slideTo(i)" :class="{active:active === i}" v-for="(category,i) in categories" :key="i">
                    <div class="nav-link">{{category.name}}</div>
                </div>
            </div>
            <div class="pt-2 px-3">
                <swiper ref="list" :options="{autoHeight:true}" @slide-change="()=>active = $refs.list.swiper.realIndex">
                    <swiper-slide v-for="(category,l) in categories" :key="l">
                        <!-- 将category绑定到插槽中,父组件可以直接拿到 -->
                        <slot name="items" :categories="category"></slot>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </m-card>
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
    },
    categories: { type: Array, required: true }
  },
  data() {
    return {
      active: 0
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


