const db = require("./db")


async function getDatas(){
    console.log("db", db)
    const rows = await db.query(
        "select * from animal"
    )
    return rows?rows:[]
}

module.exports = {
    getDatas
}