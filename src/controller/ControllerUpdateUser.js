import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic' });


const showformUpdate = async (req, res) => {
    const [rows] = await connection.execute("select * from users where id = ?", [req.params.userId])
    // console.log(JSON.stringify(rows))
    return res.render('view.ejs', { dataUser: rows[0] })
}


export default showformUpdate