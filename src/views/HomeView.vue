<template>
  <div>
    <form @submit.prevent="enviar">

        <label for="name">Nombre:</label>
        <input id="name" v-model="name" type="text" required />

        <label for="email">Correo:</label>
        <input id="email" v-model="email" type="email" required />

        <label for="age">Edad:</label>
        <input id="age" v-model="age" type="number" required />

        <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { leerFormulario } from "@/stores/counter"; // Asegúrate de que la ruta sea correcta

export default {
  setup() {
    const name = ref("");
    const email = ref("");
    const age = ref("");

    const formStore = leerFormulario(); // Instancia el store

    const enviar = () => {
      formStore.subir(name.value, email.value, age.value); // Pasa los valores desreferenciados
    };

    return {
      name,
      email,
      age,
      enviar,
    };
  },
};
</script>

