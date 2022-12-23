import { request } from "express"
import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic' });


let viewUserController = async (req, res) => {
    // lay id
    let id = req.params.userId;
    let [user, fields] = await connection.execute(`select * from users where id = ?`, [id])
    console.log(user)
    return res.send(JSON.stringify(user))

}

export default viewUserController