import express from "express";
import viewhomepage from "../controller/homeController.js";
import viewAboutController from "../controller/viewControllerAbout.js";
import viewUserController from "../controller/viewUserController.js";
import CreateNewUser from "../controller/CreateNewUser.js";
import deleteUser from "../controller/ControllerDeleteUser.js";
import updateUser from "../controller/ControllerUpdateUser.js"
let router = express.Router()
const initwebrouter = (app) => {
    router.get('/', viewhomepage)
    router.get('/About', viewAboutController)
    router.post('/portnew', CreateNewUser)
    router.post('/deleteUser', deleteUser)
    router.get('/view/:userId', updateUser)
    router.get('/detail/user/:userId', viewUserController)
    return app.use('/', router)
}

export default initwebrouter;
// module.exports = initwebrouter