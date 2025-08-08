import express from "express";
import { register, login, logout, getUser} from "../controllers/authController.js";      

const router = express.Router();

// post /api/v1/auth/register
router.post('/register', register)

// post /api/v1/auth/login
router.post('/login', login)

// get /api/v1/auth/logout
router.get('/logout', logout)

// get /api/v1/auth/getUser
router.get('/getUser', getUser)

export default router;