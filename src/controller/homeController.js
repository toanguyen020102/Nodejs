import pooldata from '../configs/connectDB.js'
import mysql from "mysql2/promise"

const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic' });


let viewhomepage = async (req, res) => {



    const [rows, fields] = await connection.execute('SELECT * FROM users');


    return res.render('home.ejs', { dataUser: rows, test: 'Test Demo' });
}





// module.exports = { viewhomepage, viewUserController }

export default viewhomepage
