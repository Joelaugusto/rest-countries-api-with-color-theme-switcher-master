<template>
  <div>
    <Navbar />
    <CountryDetails
      :name="country.name.common"
      :nativeName="country.name.nativeName.official"
      :subregion="country.subregion"
      :population="country.population"
      :capital="country.capital ? country.capital[0] : null"
      :region="country.region"
      :flag="country.flags.svg"
      :borderCountry="country.borders"
      :currencies="null"
      :languages="country.languages"
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
  async created() {
    const alpha = this.$route.params.alpha;
    await api.get(`alpha/${alpha}`).then((result) => {
      this.country = result.data[0];
    });
    console.log("coutnry", this.country);
  },
};
</script>

<style lang="scss" scoped></style>
