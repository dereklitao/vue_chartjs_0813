<template>
  <v-list-item>
    <v-list-item-avatar tile width="80px" height="80px">
      <v-img v-if="weathernow" :src="weathernow.now.weather_pic" aspect-ratio="1" width="80px"></v-img>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-layout row wrap>
        <v-flex shrink>
          <v-list-item-title
            v-if="weathernow"
            :style="{fontSize:'14px',textColor:'red darken-2'}"
          >{{weathernow.cityInfo.c3}} &nbsp;</v-list-item-title>
          <v-list-item-title v-if="weathernow">{{weathernow.now.weather}}</v-list-item-title>
        </v-flex>
        <v-flex shrink>
          <v-list-item-title
            v-if="weathernow"
            v-bind:style="{fontSize:'20px'}"
          >{{weathernow.cityInfo.c3}}</v-list-item-title>
          <v-list-item-title v-if="weathernow">{{weathernow.now.weather}}</v-list-item-title>
        </v-flex>
      </v-layout>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: ["weathernow"],
  data: function() {
    return {
      msg: "message"
    };
  }
};
</script>
.text{
    d-inline-flex
}

<style>
</style>