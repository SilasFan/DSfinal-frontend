<template>
    <div class="home">
        <Navbar />
        <router-view />
        <router-link to="/home/main">111111</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";

@Component({
    components: {
        Navbar
    }
})
export default class Home extends Vue {}
</script>

<style scoped>
</style>
