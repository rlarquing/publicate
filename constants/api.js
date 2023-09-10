import axios from 'axios';
// import jwtDecode from 'jwt-decode';

const baseUrl = 'https://mapas.geocuba.cu/apimayabeque';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

// Login
const login = async (endpoint, credentials) => {
    let data = {}; //DATA
    let msg = {}; //MENSAGES
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
            })
        });
        const result = await response.json();
        console.log('El resultado: ', JSON.stringify(result), result);
        if (result.statusCode) {
            if (result.statusCode === 400 || result.statusCode === 403 || result.statusCode === 404 || result.statusCode === 500) {
                msg = result;
            } else {
                msg = { statusCode: 500, type: "ERROR", message: result };
            }
        } else {
            data = result;
        }
    } catch (error) {
        if (error.message.indexOf(" 400") !== -1 || error.message.indexOf(" 403") !== -1 || error.message.indexOf(" 404") !== -1 || error.message.indexOf(" 500") !== -1) {
            msg = { statusCode: 500, type: "ERROR", message: error.message };
        } else {
            msg = { statusCode: 500, type: "ERROR", message: error };
        }
    }
    console.log({ msg, data });
    return { msg, data };
}


// get
const getEvt = async (endpoint, token) => {
    let data = {}; //DATA
    let msg = {}; //MENSAGES
    try {
        const url = (`${baseUrl}/${endpoint}`);
        // alert('La URL: ', url, token);
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Authorization: 'Bearer ' + token
            }
        });
        const result = await response.json();
        console.log('El resultado: ', JSON.stringify(result), result);
        if (result.statusCode) {
            msg = result;
        } else {
            data = result;
        }
    } catch (error) {
        msg = { statusCode: 500, type: "ERROR", message: error };
    }
    console.log({ msg, data });
    return { msg, data };
}

// post
const postEvt = async (endpoint, token, params) => {
    let data = {}; //DATA
    let msg = {}; //MENSAGES
    try {
        const url = (`${baseUrl}/${endpoint}`);
        console.log('La URL: ', url, token);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify({ token, ...params })
        });
        const result = await response.json();
        console.log('El resultado: ', JSON.stringify(result), result);
        if (result.statusCode) {
            msg = result;
        } else {
            data = result;
        }
    } catch (error) {
        msg = { statusCode: 500, type: "ERROR", message: error };
    }
    console.log({ msg, data });
    return { msg, data };
}

// post
const postOpenEvt = async (endpoint, params) => {
    let data = {}; //DATA
    let msg = {}; //MENSAGES
    try {
        const url = (`${baseUrl}/${endpoint}`);
        console.log('La URL: ', url);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(params)
        });
        const result = await response.json();
        console.log('El resultado: ', JSON.stringify(result), result);
        if (result.statusCode) {
            msg = result;
        } else {
            data = result;
        }
    } catch (error) {
        msg = { statusCode: 500, type: "ERROR", message: error };
    }
    console.log({ msg, data });
    return { msg, data };
}

// patch
const patchEvt = async (endpoint, token, params) => {
    let data = {}; //DATA
    let msg = {}; //MENSAGES
    try {
        const url = (`${baseUrl}/${endpoint}`);
        console.log('La URL: ', url, token);
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify({ token, ...params })
        });
        const result = await response.json();
        console.log('El resultado: ', JSON.stringify(result), result);
        if (result.statusCode) {
            msg = result;
        } else {
            data = result;
        }
    } catch (error) {
        msg = { statusCode: 500, type: "ERROR", message: error };
    }
    console.log({ msg, data });
    return { msg, data };
}

// delete
const deleteEvt = async (endpoint, token) => {
    let data = {}; //DATA
    let msg = {}; //MENSAGES
    try {
        const url = (`${baseUrl}/${endpoint}`);
        // alert('La URL: ', url, token);
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Authorization: 'Bearer ' + token
            }
        });
        const result = await response.json();
        console.log('El resultado: ', JSON.stringify(result), result);
        if (result.statusCode) {
            msg = result;
        } else {
            data = result;
        }
    } catch (error) {
        msg = { statusCode: 500, type: "ERROR", message: error };
    }
    console.log({ msg, data });
    return { msg, data };
}

// getUser
const getAllUser = async (endpoint, token, page) => {
    let data = {}; //DATA
    let msg = {}; //MENSAGES
    try {
        const url = (`${baseUrl}/${endpoint}`);
        // alert('La URL: ', url, token);
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify({
                token
            })
        });
        const result = await response.json();
        console.log('El resultado: ', JSON.stringify(result), result);
        if (result.statusCode) {
            msg = result;
        } else {
            data = result;
        }
    } catch (error) {
        msg = { statusCode: 500, type: "ERROR", message: error };
    }
    console.log({ msg, data });
    return { msg, data };
}

// deleteUser
const deleteUser = async (endpoint, token, userId) => {
    let data = {}; //DATA
    let msg = {}; //MENSAGES
    try {
        const url = (`${baseUrl}/${endpoint}`).replace('{personaId}', userId);
        // alert('La URL: ', url, token);
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify({
                token
            })
        });
        const result = await response.json();
        console.log('El resultado: ', JSON.stringify(result), result);
        if (result.statusCode) {
            msg = result;
        } else {
            data = result;
        }
    } catch (error) {
        msg = { statusCode: 500, type: "ERROR", message: error };
    }
    console.log({ msg, data });
    return { msg, data };
}

// Logout
const logout = async (endpoint) => {
    let data = {}; //DATA
    let msg = {}; //MENSAGES
    try {
        const response = await axios.post(`${baseUrl}/${endpoint}`);
        console.log(response.data);
        data = response.data;
    } catch (error) {
        console.log("error is-->", error);
        if (error.message.indexOf(" 400") !== -1 || error.message.indexOf(" 403") !== -1 || error.message.indexOf(" 404") !== -1 || error.message.indexOf(" 500") !== -1) {
            msg = { statusCode: error.response.data.statusCode, type: "ERROR", message: error.response.data.message };
            // console.log("Aquí ya sé que no hay conexión...");
        } else {
            msg = { statusCode: 500, type: "ERROR", message: error };
        }
    }
    return { msg, data };
}

export default {
    login,
    logout,
    getEvt,
    postEvt,
    postOpenEvt,
    patchEvt,
    deleteEvt,
    deleteUser,
    getAllUser,
}