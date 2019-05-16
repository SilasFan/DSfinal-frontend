<template>
    <div class="item">
        <img v-bind:src="ImageFullUrl" class="images" />
        <router-link to="/home/lost-and-found/items/2133">title</router-link>
        <p><img src="icons/location.svg" class="icon" />position</p>
        <p><img src="icons/information.svg" class="icon" />owner</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';

@Component({})
export default class Item extends Vue {
    @Prop() private imgurl!: string;

    get ImageFullUrl() {
        return 'icons/' + this.imgurl + '.svg';
    }
}
</script>

<style scoped>
.item {
    display: flex;
    flex-direction: column;
    width: 333px;
    height: max-content;
    text-align: left;
    margin-right: 60px;
    margin-bottom: 40px;
}
.iamges {
    width: 333px;
    margin-bottom: 20px;
}
.item a {
    font-size: 20px;
    margin-bottom: 5px;
    text-decoration: none;
    margin: 30px 0px 10px 0px;
    font-weight: bold;
    color: black;
}
.item p {
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
}

.icon {
    width: 18px;
    height: 18px;
    margin-right: 3px;
}
</style>
