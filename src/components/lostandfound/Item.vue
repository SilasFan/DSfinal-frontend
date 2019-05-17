<template>
    <div class="item">
        <img v-bind:src="ImageFullUrl" class="images" />
        <router-link :to="itemURL">{{ name }}</router-link>
        <p><img src="icons/location.svg" class="icon" />{{ position }}</p>
        <p><img src="icons/information.svg" class="icon" />{{ publisher }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';

@Component({})
export default class Item extends Vue {
    @Prop() public position!: string;
    @Prop() public name!: string;
    @Prop() public publisher!: string;
    @Prop() public id!: string;
    @Prop() private imgurl!: string;
    @Prop() private category!: string;
    @Provide() private IMG_URL = 'http://localhost:4000';

    get ImageFullUrl() {
        return this.IMG_URL + this.imgurl;
    }

    get itemURL() {
        return '/home/lost-and-found/items/' + this.id + '-' + this.category;
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
