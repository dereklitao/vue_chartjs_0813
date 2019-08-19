const state = {
  ramdata: []
};

const getters = {
  ramdata: state => state.ramdata
};

const actions = {
  getramhistory({ commit }, history) {
    commit("getramhistory", history);
  }
};

const mutations = {
  getramhistory(state, history) {
    console.log(history.length, "mutations");
    history.forEach(element => {
      state.ramdata.push({ t: element.last_changed, y: element.state });
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
