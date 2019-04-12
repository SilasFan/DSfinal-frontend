<template>
    <div class="newitem">
        <h2>发布消息</h2>
        <div class="content">
            <div class="left">
                <div class="select">
                    <span>请选择消息类型</span>
                    <input type="radio" name="2333" value="寻物启事" v-model="TypeSelected" />
                    <label>寻物启事</label>
                    <input type="radio" name="2333" value="失物招领" v-model="TypeSelected" />
                    <label>失物招领 </label>
                </div>
                <input type="text" placeholder="请填写物品名称" />
                <input type="text" placeholder="请填写物品描述" />
                <input type="text" placeholder="请填写丢失地点" />
            </div>
            <div class="right">
                <div class="select">
                    <span>请上传物品照片</span>
                    <button>浏览</button>
                </div>
                <div class="imageview">
                    <img src="/icons/user.svg" />
                </div>
            </div>
            <p id="blank">&nbsp;</p>
            <button style="margin-right:20px;">发布</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({})
export default class NewItem extends Vue {
    @Provide() private TypeSelected: string = '';
}
</script>

<style scoped>
.newitem {
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
    width: 90%;
    height: auto;
    margin-top: 60px;
    margin-left: 8px;
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    box-shadow: rgba(0, 0, 0, 0.226) 0px 0px 8px;
}

.left,
.right {
    width: 40%;
    display: flex;
    flex-direction: column;
    padding: 40px 5% 50px 5%;
}
.left input {
    border: none;
    margin-top: 90px;
    font-size: 18px;
    padding-bottom: 12px;
    border-bottom: #c9c5c5 2px solid;
    outline: none;
}

.select {
    padding-bottom: 12px;
    font-size: 18px;
    border-bottom: #c9c5c5 2px solid;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: flex-end;
}
.select span {
    flex-grow: 2;
    text-align: left;
    margin-right: 20%;
}
.select label {
    margin-right: 5%;
}
.select input {
    margin-top: 0px;
}

button {
    width: 90px;
    border: #dfdfdf 1px solid;
    border-radius: 5px;
    background-color: white;
    box-shadow: #dfdfdf 0px 0px 5px;
    padding: 5px 0px 5px 0px;
    font-size: 14px;
    cursor: pointer;
    height: 31px;
}

.imageview img {
    max-width: 280px;
    max-height: 280px;
    margin-top: 60px;
}

#blank {
    flex-grow: 2;
}
</style>
