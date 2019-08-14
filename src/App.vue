<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-btn color="success">button</v-btn>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  components: {
    HelloWorld
  },
  methods: {
    clickButton: function() {
      console.log("HELLO");
    }
  },
  data: function() {
    return {
      name: "testName"
    };
  },
  beforeMount() {
    console.log(this);
    this.$options.sockets.onmessage = data =>
      console.log(JSON.parse(data.data));
  }
};
</script>
