<template>
  <v-form
    id="FormComponent"
    ref="form"
    class="px-8 pb-8"
    v-model="valid"
    :disabled="disabledForm"
    @submit.prevent="submitForm"
  >
    <fieldset class="mt-8">
      <legend class="text-h4" v-text="`Datos del Comprador`" />
      <v-divider />
      <v-text-field
        v-for="input in datosComprador"
        :key="input.name"
        v-model="datos[input.name]"
        :rules="getRules(input)"
        :name="input.name"
        :label="input.label"
        :type="input.type || 'text'"
        required
      />
    </fieldset>
    <fieldset class="mt-8">
      <legend class="text-h4" v-text="`Datos del Despacho`" />
      <v-divider />
      <v-text-field
        v-for="input in datosDespacho"
        :key="input.name"
        v-model="datos[input.name]"
        :rules="getRules(input)"
        :name="input.name"
        :label="input.label"
        :type="input.type || 'text'"
        required
      />
    </fieldset>
    <fieldset class="mt-8">
      <legend class="text-h4" v-text="`Forma de Pago`" />
      <v-divider />
      <v-radio-group
        v-model="datos[formaPago]"
        :rules="[(v) => !!v || `Este campo es obligatorio`]"
        required
      >
        <v-radio
          v-for="forma in formaPago"
          :key="forma.value"
          :label="forma.label"
          :value="forma.value"
        />
      </v-radio-group>
    </fieldset>
    <v-row justify="center" class="mt-8">
      <v-col cols="12" md="4">
        <v-btn color="primary" type="submit" v-text="`Confirmar`" block />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "FormComponent",
  data: () => ({
    valid: false,
    disabledForm: false,
    datos: {},
    datosComprador: [
      { name: "name", label: "Nombre" },
      { name: "email", label: "Email", type: "email" },
      {
        name: "repeatEmail",
        label: "Repetir Email",
        type: "email",
        rules: ["repeatEmail"],
      },
      { name: "phone", label: "Teléfono" },
    ],
    datosDespacho: [
      { name: "direction", label: "Dirección" },
      { name: "comuna", label: "Comuna" },
    ],
    formaPago: [
      { value: 1, label: "Transferencia Bancaria" },
      { value: 2, label: "Servipag" },
      { value: 3, label: "Webpay" },
      { value: 4, label: "Contra entrega" },
    ],
  }),
  methods: {
    getRules(input) {
      const rules = {
        text: (v) => !!v || "Este campo es obligatorio",
        email: (v) => /.+@.+\..+/.test(v) || "Ingrese un email valido",
        repeatEmail: (v) => this.datos.email == v || "Ingrese el mismo email",
      };
      return [
        rules[input.type || "text"],
        ...(input.rules || []).map((rule) => rules[rule]),
      ];
    },
    submitForm() {
      this.$refs.form.validate();
      if (!this.valid) return;
      this.datos["orden"] = Date.now();
      this.$emit("submitForm", this.datos);
    },
  },
};
</script>

<style scoped>
fieldset {
  border: none;
}
</style>