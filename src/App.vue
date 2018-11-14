<template>
  <div>
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    background-color: #ebe6df
  }
</style>