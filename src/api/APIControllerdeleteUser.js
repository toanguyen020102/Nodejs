import mysql from 'mysql2/promise'
const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic' });
const deleteUser = async (req, res) => {
    if (req.params.userId) {
        return res.status(200).json({
            Message: 'false'
        })
    }

    await connection.execute(`delete from users where id = ?`, [req.body.delete])
    // await connection.execute("select * from users where id = ?", [req.params.id])
    return res.status(200).json({
        Message: 'Success'
    })
}


export default deleteUser