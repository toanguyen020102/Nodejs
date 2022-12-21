import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import configview from './configs/configviews.js'



const app = express()
const port = process.env.PORT || 3030
// console.log(process.env)


configview(app)

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('./home', (req, res) => {

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})