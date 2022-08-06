<template>
  <v-container>
    <shopping-layout :title="title" :path="path" />
  </v-container>
</template>

<script>
import ShoppingLayout from "@/components/ShoppingLayout.vue";
export default {
  components: { ShoppingLayout },
  name: "VinosView",
  data: () => ({
    title: "Vinos Mi Chile",
    path: "/productos.json",
  }),
};
</script>