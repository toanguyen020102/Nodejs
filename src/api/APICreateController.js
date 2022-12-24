import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic' });

const APICreate = async (req, res) => {
    if (req.body.Fname == null || req.body.Lname == null || req.body.Email == null || req.body.address == null) {
        return res.status(200).json({
            Message: 'false'
        })
    }
    await connection.execute(`insert into users values (?,?,?,?,?)`, ['', req.body.Fname, req.body.Lname, req.body.Email, req.body.address])
    return res.status(200).json({
        Message: 'success'
    })
}

export default APICreate