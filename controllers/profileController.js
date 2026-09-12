import Profile from "../models/Profile.js";
import User from "../models/User.js";




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