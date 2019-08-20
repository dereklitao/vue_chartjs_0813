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
      <v-container grid-list-lg>
        <v-layout row wrap justify-center align-center>
          <v-flex shrink>
            <RamLineChart></RamLineChart>
          </v-flex>
          <v-flex shrink>
            <WeatherCard></WeatherCard>
          </v-flex>
          <v-btn color="success" @click="clickButton">button</v-btn>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import RamLineChart from "@/charts/RamLineChart";
import WeatherCard from "@/components/WeatherCard";
export default {
  name: "App",
  components: {
    HelloWorld,
    RamLineChart,
    WeatherCard
  },
  methods: {
    clickButton: function() {
      console.log("Hello World");
    }
  },
  data: function() {
    return {
      name: "testName"
    };
  }
  // beforeMount() {
  //   console.log(this);
  //   this.$options.sockets.onmessage = data =>
  //     console.log(JSON.parse(data.data));
  // }
};
</script>
