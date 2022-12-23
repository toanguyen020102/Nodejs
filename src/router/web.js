import express from "express";
import viewhomepage from "../controller/homeController.js";
import viewAboutController from "../controller/viewControllerAbout.js";
import viewUserController from "../controller/viewUserController.js";

let router = express.Router()
const initwebrouter = (app) => {
    router.get('/', viewhomepage)
    router.get('/About', viewAboutController)
    router.get('/detail/user/:userId', viewUserController)
    return app.use('/', router)
}

export default initwebrouter;
// module.exports = initwebrouter