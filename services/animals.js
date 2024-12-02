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

async function update(id,animal){
    const result = await db.query(`
        update animal set Name=?, Species=?, Price=? where Id=?        
        `,
        [animal.Name, animal.Species, animal.Price, id])
        let message="Error in updating animal"

        if (result.affectedRows)
            message="Animal updated succesfully"
        return {message}
}
async function remove(id,animal){
    const result = await db.query(`
        delete from animal where Id=?        
        `,
        [id])

        let message="Error in deleting animal"
        if (result.affectedRows)
            message="Animal deleted succesfully"
        return {message}
}

module.exports = {
    getDatas,
    create,
    update,
    remove
    
}