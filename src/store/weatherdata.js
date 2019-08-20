const state = {
  weatherdata: null
};

const getters = {
  weatherdata: state => state.weatherdata
};

const actions = {
  updateweather({ commit }, newweather) {
    commit("updateweather", newweather);
  }
};

const mutations = {
  updateweather(state, newweather) {
    console.log(newweather.data.showapi_res_body);
    state.weatherdata = newweather.data.showapi_res_body;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
