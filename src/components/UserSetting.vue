<template>
    <div class="user-setting-view">
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({})
export default class UserSetting extends Vue {}
</script>

<style scoped>
.user-setting-view {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>
