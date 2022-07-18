import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import "./assets/styles/global.scss";
import { mockWorker } from "@/mocks/browser";

// init mock worker to server JSON files
mockWorker.start({
    onUnhandledRequest: "bypass",
});

const app = createApp(App);

app.use(router);

app.mount("#app");
