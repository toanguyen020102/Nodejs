import * as dotenv from 'dotenv'
import express from 'express'
import configview from './configs/configviews.js'
import initwebrouter from './router/web.js'
import connection from './configs/connectDB.js'
dotenv.config()



const app = express()
const port = process.env.PORT || 3030


//setup view
configview(app)

//
initwebrouter(app)




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})