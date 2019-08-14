import Vue from "vue";
import './plugins/axios'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueNativeSock from "vue-native-websocket";

Vue.config.productionTip = false;

Vue.use(VueNativeSock, "ws://172.16.6.106:8123/api/websocket", {
  store: store,
  format: "json",
  reconnection: true,
  reconnectionDelay: 3000
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
