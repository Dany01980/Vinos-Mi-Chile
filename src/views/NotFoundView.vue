<template>
  <v-container class="text-center" id="NotFoundView">
    <h1 v-text="`Pagina no encontrada`" />
    <router-link :to="{ name: 'home' }" v-text="`volver al home`" />
  </v-container>
</template>

<script>
export default { name: "NotFoundView" };
</script>