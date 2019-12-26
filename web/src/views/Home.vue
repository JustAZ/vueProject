<template>
    <div class="home">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
                <img class="w-100" src="../assets/img/711fe645edf945c3af371a5aade6ad04.jpeg">
            </swiper-slide>
            <swiper-slide class="w-100">
                <img class="w-100" src="../assets/img/484bcdf513fa8e818d90f542f10258a0.jpeg">
            </swiper-slide>
            <swiper-slide class="w-100">
                <img class="w-100" src="../assets/img/711fe645edf945c3af371a5aade6ad04.jpeg">
            </swiper-slide>
            <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
            <!-- Optional controls -->
        </swiper>
        <!-- end of weiper -->
        <list-card icon="LC_icon_menu_line" title="新闻资讯" :categories="newCats">
            <!-- 接受子组件插槽传递过来的数据 -->
            <template #items="{categories}">
                <router-link tag="div" :to="`/article/${category._id}`" class="py-2 d-flex fs-lg" v-for="(category,n) in categories.newsList" :key="n">
                    <span class="text-info">[{{category.categoryName}}]</span>
                    <span class="px-2">|</span>
                    <span class="flex-1 text-dark text-ellipsis">{{category.title}}</span>
                    <span class="text-gray-1 fs-sm">{{category.createdAt | date}}</span>
                </router-link>
            </template>
        </list-card>
        <list-card icon="-superhero" title="英雄列表" :categories="heroCats">
            <!-- 接受子组件插槽传递过来的数据 -->
            <template #items="{categories}">
                <div class="d-flex flex-wrap" style="margin:0 -0.5rem">
                    <div class="p-2 text-center" style="width:20%" v-for="(hero,n) in categories.heroList" :key="n">
                        <img :src="hero.avatar" alt="" class="w-100">
                        <div>{{hero.name}}</div>
                    </div>
                </div>

            </template>
        </list-card>
        <!-- <list-card icon="-superhero" title="英雄列表" :categories="newCats">
           
            <template #items="{categories}">
                <div class="py-2 d-flex" v-for="(category,n) in categories.newList" :key="n">
                    <span>[{{category.categoryname}}]</span>
                    <span class="px-1">|</span>
                    <span class="flex-1 ">{{category.title}}</span>
                    <span>{{category.date}}</span>
                </div>
            </template>
        </list-card> -->
        <!-- end of nav -->
        <!-- <div class="card bg-white mt-3">
            <div class="card-header d-flex py-3 px-3 ">
                <i class="iconfont icon-LC_icon_menu_line"></i>
                <div class="nav-link flex-1 px-2 fs-xl">新闻资讯</div>
                <i class="iconfont icon-more"></i>
            </div>
            <div class="card-body pt-3">
                <div class="nav jc-between px-3">
                    <div class="nav-item active">
                        <div class="nav-link">热门</div>
                    </div>
                    <div class="nav-item ">
                        <div class="nav-link">新闻</div>
                    </div>
                    <div class="nav-item ">
                        <div class="nav-link">公告</div>
                    </div>
                    <div class="nav-item ">
                        <div class="nav-link">活动</div>
                    </div>
                    <div class="nav-item ">
                        <div class="nav-link">赛事</div>
                    </div>
                </div>
                <div class="pt-2 px-3">
                    <swiper>
                        <swiper-slide v-for="l in 5" :key="l">
                            <div class="py-2 d-flex" v-for="n in 5" :key="n">
                                <span>[新闻]</span>
                                <span class="px-1">|</span>
                                <span class="flex-1">KPL季后赛开赛 参与活动送好礼</span>
                                <span>11/01</span>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

            </div>
            
            
        </div> -->
        <p>aaaaa</p>
        <p>aaaaa</p>

        <p>aaaaa</p>

        <p>aaaaa</p>

        <p>aaaaa</p>
        <p>aaaaa</p>
    </div>
</template>

<script>
import dayjs from 'dayjs'
// @ is an alias to /src
export default {
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD')
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.pagination-home'
        }
        // autoplay: { delay: 1500 }
      },
      swiperSlides: [1, 2, 3],
      nav_title: [
        {
          id: 1,
          title: '爆料站',
          class: 'sprite sprite-news'
        },
        {
          id: 2,
          title: '故事站',
          class: 'sprite sprite-story'
        },
        {
          id: 3,
          title: '周边商城',
          class: 'sprite sprite-shop'
        },
        {
          id: 4,
          title: '体验服',
          class: 'sprite sprite-test'
        },
        {
          id: 5,
          title: '新人专区',
          class: 'sprite sprite-new'
        },
        {
          id: 6,
          title: '荣耀 传承',
          class: 'sprite sprite-honor'
        },
        {
          id: 7,
          title: '模拟站资料库',
          class: 'sprite sprite-ziliao'
        },
        {
          id: 8,
          title: '王者营地',
          class: 'sprite sprite-king'
        },
        {
          id: 9,
          title: '公众号',
          class: 'sprite sprite-public'
        }
      ],
      close: true,
      close_navs: [],
      newCats: [
        {
          name: '热门',
          newList: new Array(5).fill(1).map(v => ({
            categoryname: '活动',
            title: 'KPL季后赛开赛 参与活动送好礼',
            date: '11/01'
          }))
        },
        {
          name: '新闻',
          newList: new Array(5).fill(1).map(v => ({
            categoryname: '新闻',
            title: 'KPL季后赛开赛 参与活动送好礼',
            date: '11/01'
          }))
        },
        {
          name: '公告',
          newList: new Array(5).fill(1).map(v => ({
            categoryname: '活动',
            title: 'KPL季后赛开赛 参与活动送好礼',
            date: '11/01'
          }))
        },
        {
          name: '活动',
          newList: new Array(5).fill(1).map(v => ({
            categoryname: '活动',
            title: 'KPL季后赛开赛 参与活动送好礼',
            date: '11/01'
          }))
        },
        {
          name: '赛事',
          newList: new Array(5).fill(1).map(v => ({
            categoryname: '活动',
            title: 'KPL季后赛开赛 参与活动送好礼',
            date: '11/01'
          }))
        }
      ],
      heroCats: []
    }
  },
  created() {
    this.getList()
    this.getHeroCat()
  },
  methods: {
    close_nav() {
      if (this.close) {
        this.close_navs = this.nav_title.splice(4, 5)
        this.close = !this.close
        console.log(this.close_navs)
      } else {
        //   this.nav_title.concat(this.close_navs)
        this.nav_title = [...this.nav_title, ...this.close_navs]
        this.close = !this.close
      }
    },
    async getList() {
      const res = await this.$http.get('news/list')
      this.newCats = res.data
      // console.log(res.data)
      console.log(this.newCats)
    },
    async getHeroCat() {
      const res = await this.$http.get('heroes/list')
      this.heroCats = res.data
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/_tempCss';
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, 'white');

    &.swiper-pagination-bullet-active {
      background: map-get($colors, 'info');
    }
  }
}

.nav-icon {
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>

