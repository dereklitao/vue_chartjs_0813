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
                unit: "minute"
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
      this.getramhistory(response.data[10]);
    });
  }
};
</script>

<style>
</style>