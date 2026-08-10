import express from "express";
import Router from "express";
import controller from "../controllers/userController.js";
import protect from "../middleware/protection.js";

//declaring all controllers
const {getUsers, signup, login} = controller;

const router = express.Router();

//handling routes
router.get('/', getUsers);
router.post('/api/signup',signup );
router.post('/api/login',login );




export default router;