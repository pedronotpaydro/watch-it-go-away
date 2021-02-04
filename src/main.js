import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueTyperPlugin from "vue-typer";
import VueTypedJs from 'vue-typed-js';
import App from "./App.vue";

Vue.use(VueTypedJs)
Vue.use(VueTyperPlugin)
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
