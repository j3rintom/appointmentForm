import mongoose from "mongoose"

const userschema = mongoose.Schema({
  name: String,
  email: String,
  number: Number,
  date: {
    type: Date,
    default: new Date(),
  },
});


const UserSchema = mongoose.model('UserSchema',userschema)

export default UserSchema