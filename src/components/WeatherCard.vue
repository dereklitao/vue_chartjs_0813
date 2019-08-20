<template>
  <v-card width="500px" height="600px">
    <v-list two-line>
      <WeatherNowItem :weathernow="weatherdata"></WeatherNowItem>
      <WeatherForecastItem></WeatherForecastItem>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import WeatherNowItem from "@/components/WeatherNowItem";
import WeatherForecastItem from "@/components/WeatherForecastItem";
export default {
  components: {
    WeatherNowItem,
    WeatherForecastItem
  },
  computed: {
    ...mapGetters({
      weatherdata: "weatherdata"
    })
  },
  methods: {
    ...mapActions({
      updateweather: "updateweather"
    })
  },
  beforeMount() {
    this.$axios.get("/config").then(response => {
      if (
        response.data.latitude != undefined &&
        response.data.longitude != undefined
      ) {
        console.log(response.data.latitude, response.data.longitude);
        let getweatherconfig = {
          headers: {
            Authorization: "APPCODE 82364f1c28fd428d846a915e5d136779"
          },
          url: "http://saweather.market.alicloudapi.com/gps-to-weather",
          params: {
            from: 3,
            lat: response.data.latitude,
            lng: response.data.longitude,
            need3HourForcast: 1,
            needMoreDay: 1,
            needIndex: 1,
            needHourData: 1
          }
        };
        this.$axios.request(getweatherconfig).then(weatherresult => {
          this.updateweather(weatherresult);
        });
      }
    });
  }
};
</script>

<style>
</style>