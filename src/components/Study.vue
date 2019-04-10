<template>
    <div class="study">
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({})
export default class Study extends Vue {}
</script>

<style scoped>
.study {
    width: 100%;
    height: 100%;
    display: flex;
}
</style>
