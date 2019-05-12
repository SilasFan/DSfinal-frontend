<template>
    <div class="main-rightBar">
        <div>
            <h2>最热讨论</h2>
            <a href="#">假装是一个讨论</a>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import getHotestFunc from '@/scripts/main/Hotest';

@Component({})
export default class RightBar extends Vue {
    @Provide() public hotest!: any;

    public beforeMount() {
        this.getHotest();
    }

    // TODO:等待数据补完
    private getHotest() {
        const This = this;
        getHotestFunc().then(res => {
            if (res.msg) {
                console.log(res.msg);
            } else {
                This.hotest = res.hots;
            }
        });
    }
}
</script>

<style scoped>
.main-rightBar {
    width: 320px;
    height: 100%;
}
.main-rightBar div {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    position: fixed;
    margin-top: 30px;
    width: 280px;
}

.main-rightBar h2 {
    font-size: 25px;
    text-align: left;
    margin-bottom: 50px;
}
.main-rightBar a {
    width: 100%;
    text-decoration: none;
    text-align: left;
    color: #878787;
    font-size: 17px;
    box-shadow: #d8d8d852 0px 3px 0px;
    padding: 0px 0px 5px 0px;
}
</style>
