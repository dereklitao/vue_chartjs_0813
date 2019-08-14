export const authinfo = {
  type: "auth",
  access_token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI3YWVlZmRlYzVkMjA0YjM2YTA0N2VhYWFiMDQwY2Y3NyIsImlhdCI6MTU2NTY3MzcwNywiZXhwIjoxODgxMDMzNzA3fQ.97WnzhKW5W1Oj4qHIRzUUtVDLdFwKZbS-5xXAA6Q4jk"
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
