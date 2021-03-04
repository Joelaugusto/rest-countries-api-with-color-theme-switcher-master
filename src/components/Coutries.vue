<template>
  <div>
    <Filtrar :regionchange="onRegionChange" :onSearch="onSearch" />
    <div class="container1">
      <div v-for="(country, index) in countries" :key="index">
        <country
          :name="country.name"
          :population="country.population"
          :capital="country.capital"
          :region="country.region"
          :flag="country.flag"
          :alpha3Code="country.alpha3Code"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Country from "./Country";
import api from "./../services/api";
import Filtrar from "./Filtrar.vue";
export default {
  name: "Coutries",
  components: {
    Country,
    Filtrar,
  },
  data: () =>({
      countries: [],
      allCountries: [],
    }),
  created: function () {
    if(this.countries.length === 0){
      api.get("/all").then((result) => {
      this.allCountries = result.data;
      let pais = [];
      for (let i = 0; i < 8; i++) {
        let j = Math.floor(Math.random() * (result.data.length + 1)); // parte de 0 a tamanho do array
        pais[i] = result.data[j];
      }
      this.countries = pais;
    });
    }
  },
  methods: {
    onRegionChange: function (e) {
      let pais = [];
      this.allCountries.map((count) => {
        if (
          count.region === e.target.selectedOptions[0].value
        ) {
          console.log(count.region);
          console.log(e.target.selectedOptions[0].value);
          pais.push(count);
        }
      });
      this.countries = pais;
      console.log(pais)
      console.log(this.countries);
    },
    onSearch: function (e) {
      let pais = [];

      this.allCountries.map((count) => {
        if (
          count.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          count.nativeName.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          pais.push(count);
        }
        this.countries = pais;
      });
    },
  },
};
</script>

<style lang="css" scoped>
.container1 {
  display: flex;
  flex-direction: row;
  margin: 0 50px;
  justify-content: space-between;
  flex-flow: wrap;
}
</style>