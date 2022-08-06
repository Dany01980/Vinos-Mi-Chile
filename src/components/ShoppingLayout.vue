<template>
  <v-row id="ShoppingLayout">
    <v-col cols="12" md="4">
      <bag-component />
    </v-col>
    <v-col cols="12" md="8">
      <h1 v-text="title" />
      <v-row>
        <v-col cols="12" md="4" v-for="product in products" :key="product.id">
          <card-with-description-component
            :product="product"
            @agregar="addToBag"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
import BagComponent from "./BagComponent.vue";
import CardWithDescriptionComponent from "./CardWithDescriptionComponent.vue";
export default {
  components: { CardWithDescriptionComponent, BagComponent },
  name: "ShoppingLayout",
  props: ["title", "path"],
  data: () => ({
    products: null,
  }),

  methods: {
    ...mapActions(["addToBag"]),
    async getProducts(path) {
      try {
        const response = await fetch(path);
        if (!response.ok) throw "Error en API";
        const json = await response.json();
        this.products = json.productos;
      } catch (error) {
        console.log(error);
      }
    },
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  created() {
    this.getProducts(this.path);
  },
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>