import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueClipboard from "vue-clipboard2";
import VueCodeHighlight from "vue-code-highlight";
import router from "./router";

Vue.use(VueClipboard);

Vue.use(VueCodeHighlight);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
