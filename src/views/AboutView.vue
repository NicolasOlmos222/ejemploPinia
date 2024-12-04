<template>
  <div>
    <h3>Datos almacenados:</h3>
    <p><strong>Nombre:</strong> {{ formStore.name }}</p>
    <p><strong>Correo:</strong> {{ formStore.email }}</p>
    <p><strong>Edad:</strong> {{ formStore.age }}</p>
  </div>
</template>

<script>
import { leerFormulario } from "@/stores/counter"; // Asegúrate de que la ruta sea correcta

export default {
  setup() {
    const formStore = leerFormulario(); // Instancia el store para acceder a sus datos

    return {
      formStore, // Exporta el store para usarlo en el template
    };
  },
};
</script>
