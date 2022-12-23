import mysql from 'mysql2'

console.log('Connect pool...')
const pooldata = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
});

// console.log(pooldata)


export default pooldata