<template>
  <section id="app" class="bg-light text-lg font-nomal lg:text-base sm-text-sm">
    <router-view />
  </section>
</template>

<style lang="scss">
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: .5px;
  color: #000;
  text-decoration: none;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap");

html,
body,
#app {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: .5px;
  font-weight: 500;
  background: #84a9ac;
}

a, button {
  display: block;
  cursor: pointer !important;
}

@media screen and (max-width: 1280px) {
  html,
  body,
  #app,
  * {
    font-size: 14px;
    line-height: 22px;
  }
}

@media screen and (max-width: 425px) {
  html,
  body,
  #app,
  * {
    font-size: 12px;
    line-height: 18px;
  }
}

</style>
