<template>
   <h1> Vehiculos </h1> 
    <FormV />
    <Tabla />
</template>

<script>
import FormV from './FormV.vue'
import {provide, reactive, ref} from 'vue'
import Tabla from './Tabla.vue';

export default {
  name: 'Vehiculo',
  components: {
    FormV,
    Tabla
  },
  setup(){
    const vehiculos = ref([]);
    const vehiculo = reactive({
      nombre:'',
      placa:'',
      espacio:'',
      numeroTicket:'',
      horas:0,
      costo:0
    })
    provide('vehiculo',vehiculo);
    provide('vehiculos', vehiculos);
  }
}
</script>

