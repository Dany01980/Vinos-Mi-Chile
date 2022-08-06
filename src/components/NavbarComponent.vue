<template>
  <nav id="NavbarComponent" class="mb-md-16">
    <v-app-bar app color="green" dark>
      <v-toolbar-title v-text="`Vinos Mi Chile`" />
      <v-spacer></v-spacer>
      <v-btn
        text
        v-for="(btn, i) in btns"
        :key="i"
        v-text="btn.text"
        @click="$router.push({ name: btn.route })"
        :disabled="routeDisabled(btn.route)"
      />
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data: () => ({
    btns: [
      { text: "Home", route: "home" },
      { text: "Vinos", route: "vinos" },
      { text: "Vinos en Promoción", route: "vinosEnPromocion" },
      { text: "Accesorios", route: "accesorios" },
    ],
  }),
  methods: {
    routeDisabled(route) {
      return this.$route.name == route;
    },
  },
};
</script>