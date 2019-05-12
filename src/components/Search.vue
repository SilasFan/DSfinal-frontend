<template>
    <div class="search-father">
        <div class="search">
            <h2>搜索页</h2>
            <div class="search-content">
                <div>
                    <button v-bind:class="{ active: PostOrUser }" @click="PostOrUser = true">帖子</button>
                    <button v-bind:class="{ active: !PostOrUser }" @click="PostOrUser = false">用户</button>
                </div>
                <div class="search-components">
                    <None :keyword="keyWord" v-if="isEmpty" :postoruser="PostOrUser" />
                    <keep-alive v-if="!isEmpty">
                        <component v-bind:is="whichPost"></component>
                    </keep-alive>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import None from '@/components/search/None.vue';
import ResultPost from '@/components/search/Result-post.vue';
import ResultUser from '@/components/search/Result-user.vue';
import SearchFunc from '@/scripts/search/Search';

@Component({
    components: {
        None,
        ResultPost,
        ResultUser,
    },
})
export default class Search extends Vue {
    @Provide() public PostOrUser: boolean = true;
    @Provide() public isEmpty: boolean = false;
    @Provide() public Result!: any;

    get whichPost() {
        if (this.PostOrUser) {
            return 'ResultPost';
        } else {
            return 'ResultUser';
        }
    }

    get keyWord() {
        return this.$route.query.keyWord;
    }

    public mounted() {
        // 实际上搜索没有写
        // this.search();
    }

    private search() {
        SearchFunc(this.keyWord as string).then(res => {
            if (res.msg) {
                alert('网络故障!');
            } else {
                console.log(res);
            }
        });
    }
}
</script>

<style scoped>
.search-father {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;
}

.search {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    max-width: 1024px;
    margin-top: 50px;
}

.search-content {
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.search-components {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    box-shadow: #00000028 0px 8px 8px;
    padding: 30px 30px 10px 30px;
    margin-bottom: 50px;
}
.search-components > * {
    height: max-content;
}

h2 {
    padding: 5px 0px 5px 20px;
    border-left: #9a9a9a 2px solid;
    text-align: left;
    align-self: flex-start;
    margin-bottom: 7%;
}

button {
    height: 40px;
    width: 70px;
    border: none;
    background-color: white;
    cursor: pointer;
}
button:hover {
    background-color: #f5f5f5;
    color: #1492e6;
}

.active {
    background-color: #f5f5f5;
    color: #1492e6;
}
</style>
