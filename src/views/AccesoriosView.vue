<template>
  <v-container id="AccesoriosView">
    <shopping-layout :title="title" :path="path" />
  </v-container>
</template>

<script>
import ShoppingLayout from "@/components/ShoppingLayout.vue";
export default {
  components: { ShoppingLayout },
  name: "AccesoriosView",
  // props: {},
  data: () => ({
    title: "Articulos",
    path: "/accesorios.json",
  }),
  // computed: {},
  // methods: {},
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>