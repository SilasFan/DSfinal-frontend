<template>
    <div class="itemlist">
        <h2>{{ title }}</h2>
        <div class="items">
            <Item imgurl="user" />
            <Item imgurl="location" />
            <Item imgurl="user" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';
import Item from '@/components/lostandfound/Item.vue';
import AllFoundsFunc from '@/scripts/lostandfound/AllFounds';

@Component({
    components: {
        Item,
    },
})
export default class ItemList extends Vue {
    @Provide() public Items: any = [];

    get title() {
        return this.$attrs.title;
    }

    public getItems() {
        AllFoundsFunc().then(res => {
            console.log(res);
            this.Items = res.founds;
        });
    }

    private beforeMount() {
        this.getItems();
    }
}
</script>

<style scoped>
.itemlist {
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

.items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    align-items: center;
}
</style>
