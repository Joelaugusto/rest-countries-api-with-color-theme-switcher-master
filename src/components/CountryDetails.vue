<template>
  <div class="countryDetails">
    <a href="#"></a>
    <div>
      <img :src="flag" />
      <div class="">
        <div class="info-div">
          <h3>{{ name }}</h3>
          <div class="details">
            <div>
              <p>Native Name : {{ nativeName }}</p>
              <p>Population: {{ population }}</p>
              <p>Region:{{ region }}</p>
              <p>Sub Region: {{ subregion }}</p>
              <p>Capital: {{ capital }}</p>
            </div>
            <div>
              <p>Top Level Domain: {{ topLevelDomain }}</p>
              <p>Currencies: {{ currencies }}</p>
              <p>Languages: {{lang}}</p>
            </div>
          </div>
        </div>
        <div class="borderCountries">
          <p>Border Countries:</p>
          <div v-for="(contry, index) in borderCountry" :key="index">
            <router-link :to="'/details/' + contry">{{ contry }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    region: String,
    population: Number,
    capital: String,
    flag: String,
    nativeName: String,
    subregion: String,
    topLevelDomain: String,
    currencies: String,
    languages: [String],
    borderCountry: [String],
  },
  data(){
    return{
     lang : ''
    }
  },
  created: function languages() {
    this.languages.map((language,index)=>{
      index!==0?this.lang +=", "+language.nativeName:this.lang +=language.name;
    });
  }
};
</script>

<style lang="css" scoped>
.countryDetails {
  display: flex;
  flex-direction: column;
  padding: 50px;
}

.countryDetails div {
  /* margin: 0 50px;*/
  display: flex;
}

.countryDetails div img {
  height: 200px;
  width: 350px;
}

.countryDetails div div {
  display: flex;
  flex-direction: column;
}

.countryInfo {
  display: flex;
  flex-direction: row;
}

.details {
  flex-direction: row !important;
}

.info-div {
  /*-top: 20px;*/
}

.info-div h3 {
  margin: 30px 100px;
}

.info-div div {
  margin: 0 50px;
}

.info-div div p {
  margin: 8px 0;
}

.borderCountries {
  display: flex;
  margin-left: 100px;
  flex-direction: row !important;
}

.borderCountries p {
  margin-right: 30px;
}

.borderCountries div {
  margin-top: 12px;
  margin-right: 10px;
  box-shadow: 0 0 2px grey;
  padding: 2px 27px;
  height: 22px;
  border-radius: 2px;
}

.borderCountries div a {
  font-size: 14px;
  text-decoration: none;
  padding-top: 2px;
}
</style>