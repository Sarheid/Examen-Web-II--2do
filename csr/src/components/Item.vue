<template>
  <tr>
      <td>{{vehiculo.placa}}</td>
      <td>{{vehiculo.nombre}}</td>
      <td>{{vehiculo.espacio}}</td>
      <td>{{vehiculo.numeroTicket}}</td>
      <td>{{fecha}}</td>
      <td>{{hora}}</td>
      <td>{{vehiculo.horas}}</td>
      <td>{{vehiculo.costo}}</td>
      <td>{{vehiculo.total}}</td>
      <td>
          <button
            class="btn btn-danger"
            @click="eliminar(vehiculo._id)"
          >Eliminar</button>
      </td>
  </tr>
</template>

<script>
import { computed } from '@vue/reactivity';
import { inject } from '@vue/runtime-core';
export default {
    props:['vehiculo'],
    setup(props){
        const vehiculos = inject('vehiculos');
        const fecha = computed(()=>{
          const date = new Date(props.vehiculo.fechaEntrada)
          return date.toDateString()
        });

        const hora = computed(()=>{
          const date = new Date(props.vehiculo.fechaEntrada)
          return date.toTimeString()
        });

        const eliminar = async(id)=>{
            try {
                const data = await fetch(`http://localhost:9000/api/vehiculo/salida/${id}`,{
                    method: 'DELETE',
                    headers:{
                        "Content-Type": "application/json",
                    }
                })
                const res = await data.json();
                vehiculos.value = vehiculos.value.filter(i=> i._id !== id)
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }

        return{fecha, hora, eliminar}
    }
}
</script>
