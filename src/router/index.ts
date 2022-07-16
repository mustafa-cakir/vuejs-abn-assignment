import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { URL_ACCOUNT_DETAIL, URL_ACCOUNTS, URL_HOME } from "@/helpers/constants";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: URL_HOME,
            name: "home",
            component: HomeView,
        },
        {
            path: URL_ACCOUNTS,
            name: "accounts",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/AccountsView.vue"),
        },
        {
            path: `${URL_ACCOUNT_DETAIL}/:accountNumber`,
            name: "account-detail",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/AccountDetailView.vue"),
        },
    ],
});

export default router;
