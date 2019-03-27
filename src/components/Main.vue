<template>
    <div class="main-page">
        <p>23333333</p>
        <router-link to="/home">22222</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Main extends Vue {}
</script>

<style scoped>
.main-page {
    width: 100%;
    background-color: aqua;
}
</style>
