import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/styles/global.scss";
import { mockWorker } from "@/mocks/browser";

// init mock worker
mockWorker.start();

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
