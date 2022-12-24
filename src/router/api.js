import express from "express";
import getAlluser from '../api/APIconTroller.js'
import APICreate from "../api/APICreateController.js";
import updateUser from "../api/APIupdateuser.js";
import deleteUser from "../api/APIControllerdeleteUser.js";


let router = express.Router()


const initAPIv1 = (app) => {
    router.get('/users', getAlluser)
    router.post('/addUser', APICreate)
    router.put('/updateUser', updateUser)
    router.delete('/deleteUser', deleteUser)
    return app.use('/api/v1', router)
}

export default initAPIv1;