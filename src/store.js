import Vue from "vue";
import Vuex from "vuex";
import general from "@/store/general";
import chartdata from "@/store/chartdata";
import weatherdata from "@/store/weatherdata";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    general,
    chartdata,
    weatherdata
  }
});
