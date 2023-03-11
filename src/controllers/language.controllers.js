import {getConnection} from "./../database/database"


const getLenguages=async(req,res)=>{
    const connection = await getConnection()
    const result = await connection.query("SELECT  id, name, programmers FROM language")
    console.log(result);
    res.json(result);
};

export const methods={
    getLenguages
}