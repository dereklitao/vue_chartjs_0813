export const authinfo = {
  type: "auth",
  access_token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI4MmVmOThmYjU2YmU0ODk4OWY4MTY2MTBiNzRhMWQ2YyIsImlhdCI6MTU2NjE5Njk1NSwiZXhwIjoxODgxNTU2OTU1fQ.it3kwuhLKRCSq1wxz3H5rrIEPr0k27naHjOXp3YYN6w"
};

export var fetchStates = {
  id: 1,
  type: "get_states"
};

export var subscribe = {
  id: 2,
  type: "subscribe_events",
  event_type: "state_changed"
};
