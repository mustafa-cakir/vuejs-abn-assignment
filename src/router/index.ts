import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { URL_TRANSACTIONS, URL_ACCOUNTS, URL_HOME } from "@/helpers/constants";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: URL_HOME,
            name: "home",
            component: HomeView,
            meta: { title: "Mustafa Cakir - ABN AMRO Assignment" },
        },
        {
            path: URL_ACCOUNTS,
            name: "accounts",
            meta: { title: "Accounts" },
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/AccountsView.vue"),
        },
        {
            path: `${URL_TRANSACTIONS}/:accountNumber`,
            name: "transactions",
            meta: { title: "Transactions" },
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/TransactionsView.vue"),
        },
    ],
});

router.beforeEach(to => {
    document.title = to.meta.title as string;
});

export default router;
