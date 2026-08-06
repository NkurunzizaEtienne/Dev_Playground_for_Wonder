import express from "express";
import { Router } from 'express';
import controllers from "../controllers/userControllers.js";
import userModel from "../models/userModel.js";
import protect from "../middlewares/userMiddlewares.js";
const {register, login, getUsers, setCookies, readCookies} = controllers;


const router = express.Router();

router.get('/',protect, getUsers);
router.post('/api/user/signup', register);
router.post('/api/user/login', login);
router.get('/api/set-cookies', setCookies);
router.get('/api/read-cookies', readCookies);


export default router;