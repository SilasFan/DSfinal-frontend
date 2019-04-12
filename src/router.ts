import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            redirect: '/home/main',
            children: [
                {
                    path: 'main',
                    name: 'main',
                    component: () => import('@/components/Main.vue'),
                },
                {
                    path: 'hot',
                    component: () => import('@/components/hot.vue'),
                    children: [
                        {
                            path: '/',
                            component: () => import('@/components/universal/PostForm.vue'),
                        },
                        {
                            path: ':postId',
                            component: () => import('@/components/universal/Post1.vue'),
                        },
                    ],
                },
                {
                    path: 'entertainment',
                    name: 'entertainment',
                    component: () => import('@/components/Entertainment.vue'),
                },
                {
                    path: 'study',
                    // name: 'study',
                    component: () => import('@/components/Study.vue'),
                    children: [
                        {
                            path: '/',
                            component: () => import('@/components/universal/PartNav.vue'),
                            props: { links: [{ title: '讲座动态', url: '/home/study/lectures' }, { title: '课程资料', url: '/home/study/materials' }], title: '学习资料' },
                        },
                        {
                            path: 'lectures',
                            component: () => import('@/components/lectures/LectureList.vue'),
                        },
                        {
                            path: 'materials',
                            component: () => import('@/components/lectures/Materials.vue'),
                            children: [
                                {
                                    path: '/',
                                    component: () => import('@/components/lectures/MaterialForm.vue'),
                                },
                                {
                                    path: ':postId',
                                    component: () => import('@/components/universal/Post1.vue'),
                                },
                            ],
                        },
                    ],
                },
                {
                    path: 'lost-and-found',
                    // name: 'lost-and-found',
                    component: () => import('@/components/LostAndFound.vue'),
                    children: [
                        {
                            path: '/',
                            component: () => import('@/components/universal/PartNav.vue'),
                            props: {
                                links: [
                                    { title: '失物招领', url: '/home/lost-and-found/found' },
                                    { title: '寻物启事', url: '/home/lost-and-found/lost' },
                                    { title: '发布消息', url: '/home/lost-and-found/new' },
                                ],
                                title: '失物寻物',
                            },
                        },
                    ],
                },
                {
                    path: 'search',
                    component: () => import('@/components/Search.vue'),
                },
            ],
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register.vue'),
        },
    ],
});
