export const endpoints = {
    app: {
        login: 'personas/signin',
        logout: 'auth/signup',
    },
    person: {
        list: 'personas',
        add: 'personas',
        edit: 'personas',
        get: 'personas/getbyid/{token}',
        delete: 'personas/{token}',
    },
    user: {
        list: 'usuarios',
        datos: 'usuarios/{userId}'
    },
    card: {
        add: 'personas/setpersona',
        list: 'personas/getbypersona/{token}',
        get: 'personas/getbyidtarjeta',
        delete: 'personas/quitpersona',
        cancel: 'tarjetas/cancelbyfolio/{folio}',
        operations: 'transacciones/getalloperaciones/{folio}'
    },
};