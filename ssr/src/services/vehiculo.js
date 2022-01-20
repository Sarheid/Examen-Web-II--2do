const axios = require('axios');

class VehiculoService{
    async getAll(){
        const res = await axios.get('http://localhost:8000/api/vehiculo/entrada');
        const data = res.data.data;
        return data;
    }

    async get(id){
        const res = await axios.get(`http://localhost:8000/api/vehiculo/entrada/${id}`);
        const data = res.data.data;
        return data;
    }

    async create(entity){
        const res = await axios.post(`http://localhost:8000/api/vehiculo/entrada/`,entity);
        const data = res.data.data;
        return data;
    }

    async update(id, entity){
        const res = await axios.put(`http://localhost:8000/api/vehiculo/entrada/${id}`, entity);
        const data = res.data.data;
        return data;
    }

    async delete(id){
        const res = await axios.delete(`http://localhost:8000/api/vehiculo/entrada/${id}`);
        const data = res.data.data;
        return data;
    }

}

module.exports = new VehiculoService();