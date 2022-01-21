<template>
    <table class="table table-striped">
        <thead>
            <th>Placa</th>
            <th>Conductor</th>
            <th>Espacio</th>
            <th>Ticket</th>
            <th>Fecha Entrada</th>
            <th>Hora Salida</th>
            <th>Horas</th>
            <th>Costo</th>
            <th>Total</th>
            <th>Operacion</th>
        </thead>
        <tbody>
            <Item v-for="item in vehiculos"
                :key="item._id"
                :vehiculo="item"
            /> 
        </tbody>
    </table>
</template>

<script>
import { inject, onMounted } from '@vue/runtime-core'
import Item from './Item.vue';
export default {
  components: { Item },

    setup(){
        const vehiculos = inject('vehiculos');
        

        onMounted(async()=>{
            const res = await fetch('http://localhost:9000/api/vehiculo/salida',{
                method: 'GET',
                headers:{
                    "Content-Type": "application/json",
                }
            })
            const data = await res.json();
            vehiculos.value = data.data;
        })
        return { vehiculos }
    }
}
</script>

<style>

</style>