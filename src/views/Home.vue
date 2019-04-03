<template>
    <div class="home_page">
        <Navbar v-on:Display="DisplaySidebar"></Navbar>
        <div class="home">
            <transition name="Sidebar">
                <SideBar v-if="SidebarDisplay" />
            </transition>
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

@Component({
    components: {
        Navbar,
        SideBar
    }
})
export default class Home extends Vue {
    @Provide() public SidebarDisplay: boolean = false;

    public DisplaySidebar(): void {
        this.SidebarDisplay = !this.SidebarDisplay;
    }
}
</script>

<style scoped>
.home_page {
    height: 100%;
}
.home {
    overflow: hidden;
    display: flex;
    width: 100%;
    height: calc(100% - 65px);
}

/*  Sidebar动画  */
.Sidebar-leave-active {
    animation: sidebar-in 0.5s;
}
.Sidebar-enter-active {
    animation: sidebar-in 0.5s reverse;
}
@keyframes sidebar-in {
    100% {
        width: 0px;
        transform: translateX(-200px);
    }
}
</style>
