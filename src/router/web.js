import express from "express";
import viewhomepage from "../controller/homeController.js";
import viewAboutController from "../controller/viewControllerAbout.js";
import viewUserController from "../controller/viewUserController.js";
import CreateNewUser from "../controller/CreateNewUser.js";
import deleteUser from "../controller/ControllerDeleteUser.js";
import showformUpdate from "../controller/ControllerUpdateUser.js"
import UpdateUsersFromForm from "../controller/UpdateUsers.js"
let router = express.Router()
const initwebrouter = (app) => {
    router.get('/', viewhomepage)
    router.get('/About', viewAboutController)
    router.post('/portnew', CreateNewUser)
    router.post('/deleteUser', deleteUser)
    router.get('/view/:userId', showformUpdate)
    router.post('/update', UpdateUsersFromForm)
    router.get('/detail/user/:userId', viewUserController)
    return app.use('/', router)
}

export default initwebrouter;
// module.exports = initwebrouter