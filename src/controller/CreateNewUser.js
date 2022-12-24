
import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic' });


const createnewUse = async (req, res) => {
    console.log(req.body)
    await connection.execute(`insert into users values (?,?,?,?,?)`, [req.body.id, req.body.Fname, req.body.Lname, req.body.Email, req.body.address])
    return res.redirect('/')
}



export default createnewUse