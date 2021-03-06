<template class="app">
  <router-view />
</template>

<script>
export default {};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;800&display=swap");
body {
  margin: 0 auto;
}

/*:root {
  color-scheme: light dark; /* both supported *//*
}*/

.root {
  --background: hsl(0, 0%, 98%);
  --element: hsl(0, 0%, 100%);
  --text: hsl(200, 15%, 8%);
}
/*:-moz-drag-over
[data-theme="dark"] {
  --background: hsl(207, 26%, 17%);
  --element: hsl(209, 23%, 22%);
  --text: hsl(0, 0%, 100%);
}*/

h1,
h2,
h3,
p,
a {
  font-family: "Nunito Sans", sans-serif;
  color: var(--text);
}
</style>

