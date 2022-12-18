const axios = require('axios');

const axiosInstance = axios.create();

async function reqHelper(url, method, body) {
    console.log('Peticiones a ms-api en servidor 1', new Date());
    try {
        const { data } = await axiosInstance({
            url,
            method: method,
            data: body
        })
        console.log('====response data', data);
        return data;
    } catch (error) {
        console.log('====response error', error);
        return error;
    }

}

module.exports = reqHelper;