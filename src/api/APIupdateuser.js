import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic' });

const updateUser = async (req, res) => {
    if (req.body.Fname == null || req.body.Lname == null || req.body.Email == null || req.body.address == null) {
        return res.status(200).json({
            Message: 'false'
        })
    }

    await connection.execute('update users set Fname = ?, Lname =  ?, address = ?, Email = ? where id = ?',
        [req.body.Fname, req.body.Lname, req.body.address, req.body.Email, req.body.id])
    return res.status(200).json({
        Message: 'oke'
    })
}


export default updateUser