import Vue from "vue";
import App from "./App.vue";

//import "tailwindcss/tailwind.css";
import "./styles/tailwind.css";

Vue.config.productionTip = false;
Vue.prototype.$log = console.log;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
