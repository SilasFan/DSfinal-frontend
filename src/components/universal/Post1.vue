<template>
    <div class="post">
        <h3>这是标题</h3>
        <Storey />
        <Storey />
        <Storey />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import Storey from '@/components/universal/Storey.vue';

@Component({
    components: {
        Storey,
    },
})
export default class Post1 extends Vue {
    get postId() {
        return this.$route.params.postId;
    }
}
</script>

<style scoped>
.post {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
}

h3 {
    padding: 20px 0px 20px 20px;
    margin-bottom: 40px;
    background-color: #fafafa;
}
</style>
