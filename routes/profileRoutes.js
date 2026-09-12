import express from "express";

import { getProfile, updateProfile, deleteProfile } from "../controllers/profileController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();



// Get profile
router.get("/:userId", authMiddleware, getProfile);


// Update profile
router.put("/:userId", authMiddleware, updateProfile);


// Delete profile
router.delete("/:userId", authMiddleware, deleteProfile);


export default router;