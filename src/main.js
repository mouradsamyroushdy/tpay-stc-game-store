import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import setHttpDefaults from "./services/http-defaults";

setHttpDefaults();

createApp(App)
  .use(router)
  .mount("#app");
