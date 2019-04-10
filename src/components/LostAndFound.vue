<template>
    <div class="lostandfound">
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({})
export default class LostAndFound extends Vue {}
</script>

<style scoped>
.lostandfound {
    width: 100%;
    height: 100%;
    display: flex;
}
</style>
