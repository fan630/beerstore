<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/all.scss";

#app {
  text-align: center;
  color: white;
  padding-top: 66px;
  position: relative;
}

@media screen and (max-width:768px){
  #app{
      padding-top: 56px;
  }
}

</style>
