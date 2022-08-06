<template>
  <v-app >
    <navbar-component />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
export default {
  components: { NavbarComponent },
  name: "App",
};
</script>
<style>
* {
  word-break: break-word !important;      
}
</style>
