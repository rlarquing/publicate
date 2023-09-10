import * as SQLite from "expo-sqlite";
import { Platform } from "react-native";


// Init SQLite database
function openDatabase() {
    if (Platform.OS === "web") {
        return {
            transaction: () => {
                return {
                    executeSql: () => { },
                };
            },
        };
    }

    const db = SQLite.openDatabase("db.db");
    return db;
}

const db = openDatabase();

// db.transaction(
//     (tx) => {
//         tx.executeSql(`DROP TABLE IF EXISTS user;`);
//     });

// db.transaction(
//     (tx) => {
//         tx.executeSql(`DROP TABLE IF EXISTS card;`);
//     });

// db.transaction(
//     (tx) => {
//         tx.executeSql(`DROP TABLE IF EXISTS app;`);
//     });

// db.closeAsync();

const createUserTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            "create table if not exists user (id integer primary key AUTOINCREMENT, name text, lastname text, email text, logged integer, userId text, token text);"
        );
    });
}

const createAppTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            "create table if not exists app (id integer primary key AUTOINCREMENT, welcome integer, oldCamera integer, userId text);"
        );
    });
}

const createCardTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            "create table if not exists card (id integer primary key AUTOINCREMENT, cardId text, folio text, isbonificada integer, isrecargable integer, valor_inicial text, saldo text, fecha_activacion text, fecha_vencimiento text, userId text);"
        );
    });
}

const addUser = (us) => {
    // Almacenar datos en la App para usarlos localmente en las vistas
    db.transaction(
        (tx) => {
            tx.executeSql(`delete from user;`);
            // tx.executeSql(`DROP TABLE IF EXISTS user`);
            // Insertar el usuario autenticado
            tx.executeSql("insert into user (name, lastname, email, logged, userId, token) values (?, ?, ?, ?, ?, ?);",
                [us.name, us.lastname, us.email, us.logged, us.userId, us.token]
                , (transact, resultset) => console.log('Usuario insertado correctamente!', resultset)
                , (transact, err) => console.log('ERROR, ', err));
            // tx.executeSql("select * from user",
            //     [],
            //     (_, { rows }) => {
            //         console.log('Usuarios: ', JSON.stringify(rows));
            //     });
        }
    )
}

const openApp = (userId) => {
    // App info
    db.transaction(
        (tx) => {
            // tx.executeSql(`delete from app;`);
            // tx.executeSql(`DROP TABLE IF EXISTS app;`);
            tx.executeSql("insert into app (welcome, oldCamera, userId) values (?, ?, ?);", [1, 0, userId]);
        });
}

const updateApp = (userId, oldCamera) => {
    const result = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `update app set oldCamera = (?) where userId = (?);`,
                [oldCamera, userId],
                (_, { rows: { _array } }) => {
                    resolve(_array);
                },
                (_, _error) => {
                    reject(_error);
                }
            );
        });

    }).catch((error) => {
        console.error(error);
    });
    return result;
}

const removeAllCards = () => {
    db.transaction(
        (tx) => {
            tx.executeSql(`delete from card;`);
        });
}

const removeAllUsers = () => {
    db.transaction(
        (tx) => {
            // tx.executeSql(`delete from app;`);
            tx.executeSql(`delete from user;`);
            // tx.executeSql(`delete from card;`);
        });
}

const addCard = (card) => {
    // Almacenar datos en la App para usarlos localmente en las vistas
    console.log("Datos que vienen: ", card, db, card.id);
    db.transaction(
        (tx) => {
            // Insertar el tarjeta
            tx.executeSql("insert into card (cardId, folio, isbonificada, isrecargable, valor_inicial, saldo, fecha_activacion, fecha_vencimiento, userId) values (?, ?, ?, ?, ?, ?, ?, ?, ?);",
                [card.id, card.folio, card.isbonificada ? 1 : 0, card.isrecargable ? 1 : 0, card.valor_inicial, card.saldo, card.fecha_activacion, card.fecha_vencimiento, card.userId]
            );
        });
}


const getLoggedInUser = async () => {
    const result = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `select * from user where logged = ?`,
                [1],
                (_, { rows: { _array } }) => {
                    if (_array.length > 0) {
                        resolve(_array[0]);
                    }
                },
                (_, _error) => {
                    reject(_error);
                }
            );
        });

    }).catch((error) => {
        console.error(error);
    });
    return result;
}

const getUser = (name, lastname, email) => {
    const result = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `update user set name = ?, lastname = ?, email = ?;`,
                [name, lastname, email],
                (_, { rows: { _array } }) => {
                    resolve(_array);
                },
                (_, _error) => {
                    reject(_error);
                }
            );
        });

    }).catch((error) => {
        console.error(error);
    });
    return result;
}

const updateUser = (id, name, lastname, email) => {
    const result = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `update user set name = (?), lastname = (?), email = (?) where userId = (?);`,
                [name, lastname, email, id],
                (_, { rows: { _array } }) => {
                    resolve(_array);
                },
                (_, _error) => {
                    reject(_error);
                }
            );
        });

    }).catch((error) => {
        console.error(error);
    });
    return result;
}

const getAllUser = () => {
    const result = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `select * from user;`,
                (_, { rows: { _array } }) => {
                    resolve(_array);
                },
                (_, _error) => {
                    reject(_error);
                }
            );
        });

    }).catch((error) => {
        console.error(error);
    });
    return result;
}

const getApp = (userId) => {
    const result = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `select * from app where userId = ?;`,
                [userId],
                (_, { rows: { _array } }) => {
                    resolve(_array);
                },
                (_, _error) => {
                    reject(_error);
                }
            );
        });
    }).catch((error) => {
        console.log('ERROR App: ', error);
    });
    return result;
}

const getUserCards = (id) => {
    const result = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `select * from card where userId = ?;`,
                [id],
                (_, { rows: { _array } }) => {
                    resolve(_array);
                },
                (_, _error) => {
                    reject(_error);
                }
            );
        });

    }).catch((error) => {
        console.error(error);
    });
    return result;
}


export default {
    db,
    createUserTable,
    createCardTable,
    createAppTable,
    openApp,
    addUser,
    addCard,
    getApp,
    getUser,
    updateUser,
    updateApp,
    getUserCards,
    removeAllCards,
    removeAllUsers,
    getLoggedInUser,
    getAllUser
}