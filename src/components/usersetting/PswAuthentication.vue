<template>
    <div class="login">
        <div class="login-form">
            <component v-bind:is="currentComponent" v-on:auth-succeed="authsucceed"></component>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import PswAuth from '@/components/usersetting/PswAuth.vue';
import PswChange from '@/components/usersetting/PswChange.vue';

interface User {
    id: string;
    password: string;
}

@Component({
    components: {
        PswAuth,
        PswChange,
    },
})
export default class Login extends Vue {
    // data
    @Provide() public PreLogin: User = {
        id: '',
        password: '',
    };

    @Provide() private currentComponent: string = 'PswAuth';

    public authsucceed(): void {
        this.currentComponent = 'PswChange';
    }
}
</script>

<style scoped>
.login {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;

    background-color: #f2f2f2;
}
.login p,
strong {
    font-size: 20px;
}

.login-form {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: column;

    width: 510px;
    padding-top: 40px;
    margin-top: -65px;
    align-self: center;
    border-radius: 16px;
    background-color: #ffffff;
    box-shadow: rgba(128, 128, 128, 0.363) 0px 0px 8px;
}
</style>
