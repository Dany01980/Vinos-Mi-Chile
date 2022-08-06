<template>
  <v-row id="ConfirmedView" justify="center">
    <v-col cols="12" md="6">
      <h1 v-text="`Confirmación`" />

      <v-alert color="black" outlined type="success">
        La Orden <strong v-text="`Nº ${orden}`" /> ha sido confirmada y ya la
        estamos preparando!
      </v-alert>
      <div class="text-center">
        <v-btn
          color="primary"
          v-text="`Ir al Home`"
          @click="$router.push({ name: 'home' })"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ConfirmedView",
  props: ["orden"],
};
</script>