<template>
  <v-card id="BagComponent" d-flex-align-stretch>
    <v-card-title v-text="`Carro de Compras Vinos Mi Chile`" />
    <v-divider />
    <v-card-text class="py-0">
      <v-card class="my-4" v-for="(product, i) in bag" :key="i">
        <div class="d-flex flex-no-wrap">
          <v-avatar class="ma-3" size="125">
            <v-img :src="product.imagen"></v-img>
          </v-avatar>
          <div>
            <v-card-title v-text="product.nombre" />
            <v-card-subtitle
              class="primary--text"
              v-text="
                product.valor.toLocaleString('es-cl', {
                  style: 'currency',
                  currency: 'clp',
                })
              "
            />
          </div>
        </div>
      </v-card>
    </v-card-text>
    <v-divider />
    <v-card-text>
      <v-row >
        <template v-for="(total, i) in totales">
          <v-col cols="6" :key="`text${i}`" v-text="total.text" />
          <v-col
            class="text-h6"
            :class="{ 'primary--text': total.text == `Total` }"
            cols="6"
            :key="`total${i}`"
            v-text="
              total.total.toLocaleString('es-cl', {
                style: 'currency',
                currency: 'clp',
              })
            "
          />
        </template>
      </v-row>
      <v-btn
        v-if="$route.name != 'checkout'"
        class="mt-4"
        color="primary"
        v-text="`pagar`"
        block
        @click="$router.push({ name: 'checkout' })"
        :disabled="bag.length < 1"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "BagComponent",
  computed: {
    ...mapState(["bag"]),
    ...mapGetters(["subTotal", "descuento", "total"]),
    totales() {
      return [
        { text: "Subtotal Productos", total: this.subTotal },
        { text: "Descuentos", total: this.descuento },
        { text: "Total", total: this.total },
      ];
    },
  },
};
</script>

<style>

</style>