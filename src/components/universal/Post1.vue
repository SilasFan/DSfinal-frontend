<template>
    <div class="post">
        <h2>{{ postId }}</h2>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({})
export default class Post1 extends Vue {
    get postId() {
        return this.$route.params.postId;
    }
}
</script>

<style scoped></style>
