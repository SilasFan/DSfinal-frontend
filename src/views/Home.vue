<template>
    <div class="home">
        <Navbar></Navbar>
        <div class="home">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

@Component({
    components: {
        Navbar
    }
})
export default class Home extends Vue {}
</script>

<style scoped>
</style>
