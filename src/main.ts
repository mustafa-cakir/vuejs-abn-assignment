import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import "./assets/styles/global.scss";
import { mockWorker } from "@/mocks/browser";
import { isProduction } from "@/helpers/utils";

// init mock worker to server JSON files
// MSW does not work stable on production, hence don't init it on production
if (!isProduction) {
    mockWorker.start({
        onUnhandledRequest: "bypass",
    });
}

const app = createApp(App);

app.use(router);

app.mount("#app");
