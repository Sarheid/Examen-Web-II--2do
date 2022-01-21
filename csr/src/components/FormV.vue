<template>
  <form @submit.prevent="procesar">
  <div class="mb-3">
    <input
        type="text" 
        class="form-control"
        placeholder="Placa"
        v-model="vehiculo.placa"
    >
  </div>
  <div class="mb-3">
    <input
        type="text" 
        class="form-control"
        placeholder="Nombre"
        v-model="vehiculo.nombre"
    >
  </div>
  <div class="mb-3">
    <input
        type="text" 
        class="form-control"
        placeholder="Espacio"
        v-model="vehiculo.espacio"
    >
  </div>
  <div class="mb-3">
    <input
        type="text" 
        class="form-control"
        placeholder="Ticket"
        v-model="vehiculo.numeroTicket"
    >
  </div>
  <div class="mb-3">
    <input
        type="number" 
        class="form-control"
        placeholder="Costo"
        v-model.number="vehiculo.costo"
    >
  </div>
  <div class="mb-3">
    <input
        type="Number" 
        class="form-control"
        placeholder="Horas"
        v-model.number="vehiculo.horas"
    >
  </div>
  <button 
    type="submit" 
    class="btn btn-primary"
    
    >Guardar</button>
</form>
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
    setup(){
        const vehiculo = inject('vehiculo');

        const procesar = async()=>{
            try {
                const data = await fetch('http://localhost:9000/api/vehiculo/salida',{
                    method:'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        nombre: vehiculo.nombre,
                        placa: vehiculo.placa,
                        espacio: vehiculo.espacio,
                        costo: vehiculo.costo,
                        horas: vehiculo.horas,
                        numeroTicket: vehiculo.numeroTicket
                    })
                })
                
                vehiculo.nombre='',
                vehiculo.placa='',
                vehiculo.espacio='',
                vehiculo.numeroTicket='',
                vehiculo.horas=0,
                vehiculo.costo=0
                vehiculo.estado = '';
                const e = await data.json();
                console.log(e);
            } catch (error) {
                console.log(error);
            }
        }
        return {vehiculo, procesar}
    }
}
</script>

<style>

</style>