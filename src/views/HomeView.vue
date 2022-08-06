<template>
  <v-container id="HomeView">
    <v-carousel 
      height="500"
    >
    <v-row
    class="fill-height"
    aling="stretch"
    justify="center"
    >
      <v-carousel-item
        v-for="(vino, i) in mejoresVinos"
        :key="i"
        :src="vino.imagen"
      />
      </v-row>
    </v-carousel>
    <h1 class="mb-8 text-center" v-text="`Nuestros vinos`" />
    <v-row>
      <v-col cols="12" md="4" v-for="(vino, i) in tiposVino" :key="i">
        <v-card height="100%">
          <v-img height="57%" :src="vino.imagen" />
          <v-card-title v-text="vino.nombre" />
          <v-card-text v-text="vino.texto" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
  // props: {},
  data: () => ({
    tiposVino: null,
    mejoresVinos: null,
  }),
  // computed: {},
  methods: {
    async fetchHome() {
      try {
        const response = await fetch("/home.json");
        if (!response.ok) throw "Error en API";
        const json = await response.json();
        this.tiposVino = json.tiposvino;
        this.mejoresVinos = json.mejoresvinos;
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
    this.fetchHome();
  },
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>
