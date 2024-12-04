import { defineStore } from "pinia";

export const leerFormulario = defineStore("form", {
  state: () => ({
    name: "",
    email: "",
    age: "",
  }),
  actions: {
    subir(name, email, age) {
      this.name = name;
      this.email = email; // Corrige el campo, antes estaba asignando name dos veces
      this.age = age;
    },
  },
});

