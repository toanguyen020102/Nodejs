
import mysql from 'mysql2/promise'


const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic' });


const deleteUser = async (req, res) => {
    await connection.execute(`delete from users where id = ?`, [req.body.delete])
    return res.redirect('/')
}


export default deleteUser