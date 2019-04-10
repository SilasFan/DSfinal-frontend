<template>
    <div class="main-page">
        <Content />
        <RightBar />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Content from './main/content.vue';
import RightBar from './main/rightBar.vue';

@Component({
    components: {
        Content,
        RightBar,
    },
})
export default class Main extends Vue {}
</script>

<style scoped>
.main-page {
    display: flex;
    width: 100%;
    overflow-x: auto;
}
</style>
