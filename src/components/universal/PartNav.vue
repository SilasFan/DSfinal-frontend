<template>
    <div class="partnav">
        <h2>{{ title }}</h2>
        <div class="links">
            <a v-for="link in links" :key="link.title" v-bind:href="link.url">{{ link.title }}</a>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';

@Component({})
export default class PartNav extends Vue {
    get title() {
        return this.$attrs.title;
    }

    get links() {
        return this.$attrs.links;
    }
}
</script>

<style scoped>
.partnav {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 6%;
    margin-top: 40px;
}
.partnav h2 {
    padding: 5px 0px 5px 20px;
    border-left: #9a9a9a 2px solid;
    text-align: left;
    align-self: flex-start;
    margin-bottom: 7%;
}

.links {
    width: 65%;
    display: flex;
    flex-direction: column;
}
.links a {
    width: 100%;
    text-align: left;
    text-decoration: none;
    font-size: 25px;
    color: black;
    padding-bottom: 12px;
    border-bottom: #9a9a9a86 2px solid;
    margin-bottom: 80px;
}
.links a::after {
    content: '>>';
    margin-left: 40px;
    color: #9a9a9a86;
}
</style>
