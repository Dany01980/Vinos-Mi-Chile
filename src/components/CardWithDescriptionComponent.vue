<template>
  <v-card id="CardWithDescriptionComponent" height="100%">
    <v-img :src="product.imagen" />
    <v-card-title v-text="product.nombre" />
    <v-card-text>
      <p v-text="product.descripcion" />
      <ul>
        <li
          v-for="(caracteristica, i) in product.caracteristicas"
          :key="i"
          v-text="caracteristica"
        />
      </ul>
    </v-card-text>
    <v-card-text class="pt-0">
      <v-row class="pt-0">
        <v-col>
          <v-card-title class="pt-0" v-text="`Antes`" />
          <v-card-subtitle
            v-text="
              product.precio_normal.toLocaleString('es-cl', {
                style: 'currency',
                currency: 'clp',
              })
            "
          />
        </v-col>
        <v-col>
          <v-card-title class="pt-0" v-text="`Ahora`" />
          <v-card-subtitle
            class="primary--text"
            v-text="
              product.precio_promo.toLocaleString('es-cl', {
                style: 'currency',
                currency: 'clp',
              })
            "
          />
        </v-col>
      </v-row>
      <v-btn
        color="primary"
        elevation="2"
        v-text="`Agregar`"
        @click="agregar(product)"
        block
      />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CardWithDescriptionComponent",
  props: ["product"],
  methods: {
    agregar(product) {
      this.$emit("agregar", {
        id: product.id,
        nombre: product.nombre,
        imagen: product.imagen,
        valor: Number(product.precio_promo),
      });
    },
  },
};
</script>