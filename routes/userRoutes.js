import express from "express";

import {
    registerUser,
    loginUser,
    deleteUser
} from "../controllers/userController.js";

const router = express.Router();


// Register
router.post("/register", registerUser);



// Login
router.post("/login", loginUser);


// Delete user
router.delete("/:userId", deleteUser);


export default router;