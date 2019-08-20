<template>
  <v-card width="800px" height="300px">
    <LineChartJS :chart-data="ramdata" :options="options" :width="780" :height="280"></LineChartJS>
  </v-card>
</template>

<script>
import LineChartJS from "@/charts/JS/LineChartJS";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ramchart",
  components: { LineChartJS },
  computed: {
    ramdata() {
      return {
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: this.storeramdata
          }
        ]
      };
    },
    options() {
      return {
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                unit: "hour"
              }
            }
          ]
        }
      };
    },
    ...mapGetters({
      storeramdata: "ramdata"
    })
  },
  methods: {
    ...mapActions({
      getramhistory: "getramhistory"
    })
  },
  beforeMount() {
    this.$axios.get("/history/period").then(response => {
      console.log(response);
      response.data.forEach(array => {
        if (array[0].entity_id === "sensor.memory_free") {
          this.getramhistory(array);
        }
      });
    });
  }
};
</script>

<style>
</style>