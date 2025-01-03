import express from "express"
import { createUser, login } from "../controller/user.controller.mjs";

const router = express.Router()

router.post("/register", createUser)
router.post("/login", login);

export default router