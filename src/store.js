import Vue from "vue";
import Vuex from "vuex";
import general from "@/store/general";
import chartdata from "@/store/chartdata";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    general,
    chartdata
  }
});
