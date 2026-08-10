import express from "express";
import Router from "express";
import controller from "../controllers/userController.js";
import protect from "../middleware/protection.js";
import sendEmail from "../middleware/email.js";
import Forget from "../middleware/email.js";

//declaring all controllers
const {getUsers, signup, login} = controller;

const router = express.Router();

//handling routes
router.get('/',sendEmail, getUsers);
router.post('/api/signup',signup );
router.post('/api/login',login );
router.post('/api/forgot', Forget);




export default router;