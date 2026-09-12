import express from "express";

import {
    createProfile,
    getProfile,
    updateProfile,
    deleteProfile
} from "../controllers/profileController.js";

const router = express.Router();


// Create profile
// router.post("/:userId", createProfile);


// Get profile
router.get("/:userId", getProfile);


// Update profile
router.put("/:userId", updateProfile);


// Delete profile
router.delete("/:userId", deleteProfile);


export default router;