<template>
    <div>
        <div class="topbar bg-black py-1 px-3 d-flex ai-center">
            <img src="../assets/logo.png" height="30">
            <div class="px-2 flex-1">
                <div class="text-white">王者荣耀</div>
                <div class="text-dark-1 fs-xxs">团队成就更多</div>
            </div>
            <input type="button" class="btn bg-primary" value="立即下载" />
        </div>

        <div class=" bg-primary pt-3 pb-2 ">
            <div class="nav nav-inverse  jc-around">
                <div class="nav-item  active">
                    <router-link tag="div" to="/">首页</router-link>
                </div>
                <div class="nav-item">
                    <router-link tag="div" to="/">攻略中心</router-link>
                </div>
                <div class="nav-item">
                    <router-link tag="div" to="/">赛事中心</router-link>
                </div>
            </div>

        </div>
        <router-view></router-view>
    </div>
</template>
<style lang="scss" >
.topbar{
    position: sticky;
    top: 0;
    z-index: 999;
}
</style>

