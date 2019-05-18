<template>
    <div class="details">
        <h2>物品详情</h2>
        <div class="content">
            <div class="image">
                <img :src="imgUrl" />
            </div>
            <div class="words">
                <h3>{{ Item.name }}</h3>
                <p><img src="icons/location.svg" />{{ Item.position }}</p>
                <p><img src="icons/information.svg" />{{ Item.publisher.username }}</p>
                <p>{{ Item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import GetFoundFunc from '@/scripts/lostandfound/GetFound';
import GetLostFunc from '@/scripts/lostandfound/GetLost';

@Component({})
export default class ItemDetails extends Vue {
    @Provide() public Item: any = {};

    get itemID() {
        return this.$route.params.itemId.split('-')[0];
    }

    get category() {
        return this.$route.params.itemId.split('-')[1];
    }

    get imgUrl() {
        return 'http://localhost:4000' + this.Item.pictureURL;
    }

    private getItem() {
        if (this.category === 'found') {
            GetFoundFunc(this.itemID).then(res => {
                console.log(res);
                this.Item = res;
            });
        } else if (this.category === 'lost') {
            GetLostFunc(this.itemID).then(res => {
                this.Item = res;
            });
        }
    }

    private beforeMount() {
        this.getItem();
    }
}
</script>

<style scoped>
.details {
    width: 100%;
    height: 100%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

h2 {
    margin-top: 50px;
    padding: 5px 0px 5px 20px;
    border-left: #9a9a9a 2px solid;
    text-align: left;
}

.content {
    width: 93%;
    max-width: 1024px;
    margin-top: 5%;
    margin-right: 100px;
    display: flex;
    text-align: left;
}
.image {
    width: 500px;
    height: 500px;
    flex-shrink: 0;
}
.image img {
    max-width: 100%;
}

.words {
    margin-left: 160px;
}
.words img {
    width: 16px;
    height: 16px;
    margin-right: 3px;
}
.words p {
    display: flex;
    font-weight: bold;
}
.words p:last-of-type {
    margin-top: 2em;
}
h3 {
    font-size: 26px;
    margin-bottom: 2em;
}
</style>
