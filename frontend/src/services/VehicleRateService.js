import axios from "../axios";
import qs from 'qs';

class VehicleRateService {
    postRates=async (data) => {
        console.log("data = ",data)
        const promise = new Promise((resolve, reject) => {
            axios.post('Rate', qs.stringify(data))
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    fetchRates=async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('Rate')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    deleteRates = async (params) => {
        console.log("paramas ballo meh : ",params)
        const promise = new Promise((resolve, reject) => {
            axios.delete('Rate', {params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    updateRates = async (data) =>{
        const promise = new Promise((resolve, reject) => {
            axios.put('Rate',data)
                .then((res)=>{
                    return resolve(res)
                }).catch((err)=>{
                return resolve(err)
            })
        });
        return await promise;
    }
}
export default new VehicleRateService();