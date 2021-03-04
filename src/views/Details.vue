<template>
  <div>
    <Navbar />
    <CountryDetails
      :name="country.name"
      :nativeName="country.nativeName"
      :subregion="country.subregion"
      :population="country.population"
      :capital="country.capital"
      :region="country.region"
      :flag="country.flag"
      :topLevelDomain="country.topLevelDomain[0]"
      :currencies="country.currencies[0].name"
      :languages="country.languages"
      :borderCountry="country.borders"
    />
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import CountryDetails from "./../components/CountryDetails.vue";
import api from "./../services/api";

export default {
  name: "Details",
  components: {
    Navbar,
    CountryDetails,
  },
  data() {
    return {
      country: {},
    };
  },
  created() {
    const alpha = this.$route.params.alpha;
    api.get("/alpha/" + alpha).then((result) => {
      console.log(result.data);
      this.country = result.data;
    });
    

    /*
    this.country = [
      {
        name: "Colombia",
        topLevelDomain: [".co"],
        alpha2Code: "CO",
        alpha3Code: "COL",
        callingCodes: ["57"],
        capital: "Bogotá",
        altSpellings: ["CO", "Republic of Colombia", "República de Colombia"],
        region: "Americas",
        subregion: "South America",
        population: 48759958,
        latlng: [4.0, -72.0],
        demonym: "Colombian",
        area: 1141748.0,
        gini: 55.9,
        timezones: ["UTC-05:00"],
        borders: ["BRA", "ECU", "PAN", "PER", "VEN"],
        nativeName: "Colombia",
        numericCode: "170",
        currencies: [
          {
            code: "COP",
            name: "Colombian peso",
            symbol: "$",
          },
        ],
        languages: [
          {
            iso639_1: "es",
            iso639_2: "spa",
            name: "Spanish",
            nativeName: "Español",
          }
        ],
        translations: {
          de: "Kolumbien",
          es: "Colombia",
          fr: "Colombie",
          ja: "コロンビア",
          it: "Colombia",
          br: "Colômbia",
          pt: "Colômbia",
        },
        flag: "https://restcountries.eu/data/col.svg",
        regionalBlocs: [
          {
            acronym: "PA",
            name: "Pacific Alliance",
            otherAcronyms: [],
            otherNames: ["Alianza del Pacífico"],
          },
          {
            acronym: "USAN",
            name: "Union of South American Nations",
            otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
            otherNames: [
              "Unión de Naciones Suramericanas",
              "União de Nações Sul-Americanas",
              "Unie van Zuid-Amerikaanse Naties",
              "South American Union",
            ],
          },
        ],
        cioc: "COL",
      },
    ][0];*/
  },
};
</script>

<style lang="scss" scoped>
</style>