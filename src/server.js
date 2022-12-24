import dotenv from 'dotenv'
import express from 'express'
import configview from './configs/configviews.js'
import initwebrouter from './router/web.js'
import connection from './configs/connectDB.js'
import initAPIv1 from './router/api.js'
dotenv.config()



const app = express()
const port = process.env.PORT || 3030

//set up view enginer ho tro gi data va lay data

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//setup view
configview(app)

//
initwebrouter(app)

//
initAPIv1(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})