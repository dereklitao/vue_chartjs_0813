import Vue from "vue";
import { authinfo, fetchStates, subscribe } from "./hassio";

var messageId = 10;

const state = {
  showLeftDrawer: true,
  deviceOnlineCount: [12, 6],
  temperatureData: [
    [25.4, 24.8, 25.6, 28.9, 30.5, 33.2, 12.4, 12.5, 21.0, 12.5],
    [16.5, 12.6, 18.6, 12.5, 13.5, 20.3, 25.6, 28.9, 30.5, 33.2],
    [26.5, 16.6, 13.6, 22.5, 15.5, 22.3, 15.6, 18.9, 32.5, 30.2]
  ],
  light: [],
  socket: {
    isConnected: false,
    message: "",
    reconnectError: false
  }
};

const getters = {
  deviceOnlineCount: state => state.deviceOnlineCount,
  showLeftDrawer: state => state.showLeftDrawer,
  temperatureData: state => state.temperatureData
};

const actions = {};

const mutations = {
  toggleShowLeftDrawer(state) {
    state.showLeftDrawer = !state.showLeftDrawer;
  },
  changePieData(state) {
    state.deviceOnlineCount = [
      Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      Math.floor(Math.random() * (50 - 5 + 1)) + 5
    ];
  },
  SOCKET_ONOPEN(state, event) {
    Vue.prototype.$socket = event.currentTarget;
    state.socket.isConnected = true;
  },
  SOCKET_ONCLOSE(state, event) {
    state.socket.isConnected = false;
  },
  SOCKET_ONERROR(state, event) {
    console.log(state, event);
  },
  SOCKET_ONMESSAGE(state, message) {
    state.socket.message = message;
    receiveMessage(message);
  },
  SOCKET_RECONNECT(state, count) {
    console.log(state, count);
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectError = true;
  }
};

function receiveMessage(message) {
  // console.log(message);
  if (message.type == "auth_required") {
    Vue.prototype.$socket.sendObj(authinfo);
  } else if (message.type == "auth_ok") {
    Vue.prototype.$socket.sendObj(fetchStates);
    Vue.prototype.$socket.sendObj(subscribe);
  } else if (message.type == "event" && message.id == 2) {
    console.log(message.event.data.entity_id);
  } else if (message.type == "result" && message.id == 1) {
    state.deviceOnlineCount = [0, 0];
    message.result.forEach(device => {
      if (device.state == "unavailable") {
        state.deviceOnlineCount[1] += 1;
      } else {
        state.deviceOnlineCount[0] += 1;
      }
      if (device.entity_id.split(".")[0] == "light") {
        state.light.push(device);
      }
    });
    console.log(state);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};
