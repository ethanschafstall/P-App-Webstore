import { UserController } from '../controllers/UserController.mjs';
import express from "express";

const userRouter = express.Router();

userRouter.get('/', UserController.getUsers)
userRouter.get('/:id', UserController.getUser)

export { userRouter }