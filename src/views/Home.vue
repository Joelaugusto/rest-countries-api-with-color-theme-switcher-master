<template>
  <div>
    <Navbar />
    <Countries />
  </div>
</template>

<script>
// @ is an alias to /src
import Countries from "./../components/Coutries.vue";
import Navbar from "./../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Countries,
    Navbar,
  },
};
</script>
