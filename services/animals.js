const db = require("./db")


async function getDatas(){
    //console.log("db", db)
    const rows = await db.query(
        "select * from animal"
    )
    return rows?rows:[]
}

async function create(animals){
    console.log("Animal:", animal)
    // const result = await db.query(
    // `Insert Into animal (Name, Species, Price)
    // Values ('${animal.Name}', ${animal.Species}', ${animal.Price});`
    // )

    const result = await db.query(
        `Insert Into animal (Name, Species, Price) values (?,?,?)`,
        [animal.Name, animal.Species, animal.Price])
    
    let message="Error in creating animal"

    if (result.affectedRows)
        message="Animal created succesfully"
    return {message}
}



module.exports = {
    getDatas,
    create
    
}