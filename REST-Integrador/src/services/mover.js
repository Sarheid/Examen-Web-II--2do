const axios = require('axios');

class MoverService{
    async filtrar(desde, hasta){
        const res = axios.get(`http://localhost:8000/api/vehiculo/entrada/${desde}/${hasta}`)
        .then(res => {
            return res.data.data
        })
        const data = await res;
        for (let i = 0; i < data.length; i++) {
            const vehiculo = {
                placa: data[i].placa,
                nombre: data[i].nombre,
                espacio: data[i].espacio,
                numeroTicket: data[i].numeroTicket,
                horas: 1,
                costo: 2
            }
            console.log(vehiculo);
            axios.post('http://localhost:9000/api/vehiculo/salida',vehiculo)
            .then(da => console.log(da.data))
        }
        return 'Intercambio realizado'
    }
}

module.exports = new MoverService();