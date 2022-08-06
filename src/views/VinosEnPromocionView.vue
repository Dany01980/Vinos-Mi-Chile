<template>
  <v-container id="VinosEnPromocionView">
    <shopping-layout :title="title" :path="path" />
  </v-container>
</template>

<script>
import ShoppingLayout from "@/components/ShoppingLayout.vue";
export default {
  components: { ShoppingLayout },
  name: "VinosEnPromocionView",
  data: () => ({
    title: "Vinos Mi Chile - PROMOCIÓN -",
    path: "/promocion.json",
  }),
};
</script>