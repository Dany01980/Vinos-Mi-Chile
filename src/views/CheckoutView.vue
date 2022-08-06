<template>
  <v-container id="CheckoutView">
    <router-view v-if="confirmedOk" />
    <v-row v-else>
      <v-col cols="12" md="8">
        <h1 class="text-center" v-text="`Checkout`" />
        <form-component @submitForm="confirmed" />
      </v-col>
      <v-col cols="12" md="4">
        <bag-component />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BagComponent from "@/components/BagComponent.vue";
import FormComponent from "@/components/FormComponent.vue";

export default {
  components: { BagComponent, FormComponent },
  name: "CheckoutView",
  data: () => ({confirmedOk: false,  }),
  methods: {
    confirmed(datos) {
      this.confirmedOk = true;
      this.$router.push({ name: "confirmed", params: { orden: datos.orden } });
    },
  },
};
</script>
<style>
#CheckoutView{
   background: linear-gradient(to bottom,
  rgba(211,135,20, .6),
  rgba(29,241,171, .6),
  rgba(7,109,150, .45))          
} 
</style>
