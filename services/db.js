const mysql = require("mysql2/promise")
const {config} = require("../config")
// config.db

// const {config} = require("../config")
// üconfig.config.db

async function query(sql) {
    const connection = await mysql.createConnection(config.db)
    try{
        const [result] = await connection.execute(sql)
        return result
    }
    finally{
        await connection.end()
    }

    //const connection = await mysql.createConnection(config.db)
    // return result[0]
}
module.exports = {query}