import moment from "moment";

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
    let end_date = moment();
    history.forEach(element => {
      if (end_date.diff(element.last_changed, "minutes") < 30) {
        state.ramdata.push({ t: element.last_changed, y: element.state });
      }
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
