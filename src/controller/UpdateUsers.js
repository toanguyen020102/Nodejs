import mysql from 'mysql2/promise'


const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic' });

const UpdateUsersFromForm = async (req, res) => {
    console.log(req.body.id)
    await connection.execute('update users set Fname = ?, Lname =  ?, address = ?, Email = ? where id = ?', [req.body.Fname, req.body.Lname, req.body.address, req.body.Email, req.body.id])
    return res.redirect('/')
}

export default UpdateUsersFromForm


