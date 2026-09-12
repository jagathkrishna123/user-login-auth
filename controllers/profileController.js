import Profile from "../models/Profile.js";
import User from "../models/User.js";


// CREATE PROFILE
export const createProfile = async (req, res) => {
    try {
        const { userId } = req.params;

        const {
            age,
            phone,
            bio,
            address
        } = req.body;


        // Check if user exists
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }


        // Check if profile already exists
        const existingProfile = await Profile.findOne({
            user: userId
        });

        if (existingProfile) {
            return res.status(400).json({
                message: "Profile already exists"
            });
        }


        // Create profile
        const profile = await Profile.create({
            user: userId,
            age,
            phone,
            bio,
            address
        });


        res.status(201).json({
            message: "Profile created successfully",
            profile
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};



// GET PROFILE
export const getProfile = async (req, res) => {
    try {
        const { userId } = req.params;


        const profile = await Profile.findOne({
            user: userId
        }).populate("user", "name email");


        if (!profile) {
            return res.status(404).json({
                message: "Profile not found"
            });
        }


        res.status(200).json({
            profile
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};



// UPDATE PROFILE
export const updateProfile = async (req, res) => {
    try {
        const { userId } = req.params;

        const {
            age,
            phone,
            bio,
            address
        } = req.body;


        const profile = await Profile.findOne({
            user: userId
        });


        if (!profile) {
            return res.status(404).json({
                message: "Profile not found"
            });
        }


        // Update only fields that were provided
        if (age !== undefined) {
            profile.age = age;
        }

        if (phone !== undefined) {
            profile.phone = phone;
        }

        if (bio !== undefined) {
            profile.bio = bio;
        }

        if (address !== undefined) {
            profile.address = address;
        }


        await profile.save();


        res.status(200).json({
            message: "Profile updated successfully",
            profile
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};



// DELETE PROFILE
export const deleteProfile = async (req, res) => {
    try {
        const { userId } = req.params;


        const profile = await Profile.findOneAndDelete({
            user: userId
        });


        if (!profile) {
            return res.status(404).json({
                message: "Profile not found"
            });
        }


        res.status(200).json({
            message: "Profile deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};