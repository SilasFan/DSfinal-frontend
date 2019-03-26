import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: "/home",
            name: "home",
            component: Home,
            children: [
                {
                    path: "main",
                    name: "main",
                    component: () => import("@/components/Main.vue"),
                },
            ],
        },
        {
            path: "/login",
            name: "login",
            component: () => import("./views/Login.vue"),
        },
        {
            path: "/register",
            name: "register",
            component: () => import("./views/Register.vue"),
        },
    ],
});
