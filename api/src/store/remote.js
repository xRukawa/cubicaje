const reqHelper = require("../utils/reqHelper");

function createRemoteDB(host, port) {
    const BASE_URL = `http://${host}:${port}`;

    async function list(table) {
        return await reqHelper(`${BASE_URL}/${table}`, 'get');
    }

    async function get(table, id) {
        return await reqHelper(`${BASE_URL}/${table}/${id}`, 'get');
    }

    async function insert(table, data) {
        return await reqHelper(`${BASE_URL}/${table}`, 'post', data);
    }

    async function update(table, data) {
        return await reqHelper(`${BASE_URL}/${table}`, 'put', data);
    }

    async function remove(table, id) {
        return await reqHelper(`${BASE_URL}/${table}/${id}`, 'delete');
    }

    return {
        list,
        get,
        insert,
        update,
        remove
    }
}

module.exports = createRemoteDB;
