import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,  //The user field stores the _id of a document from the User collection.
            ref: "User",
            required: true,
            unique: true
        },

        age: {
            type: Number
        },

        phone: {
            type: String
        },

        bio: {
            type: String
        },

        address: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;















// {
//   "age": 23,
//   "phone": "11123456",
//   "bio": "1111",
//   "address": "kochi"
// }