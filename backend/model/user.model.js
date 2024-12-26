import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is Required"],
    validate: {
      validator: (value) => {
        const regex = /^[a-zA-Z0-9._-]+@(?:gmail|yahoo|hotmail|outlook)\.com$/;
        return regex.test(value);
      },
      message: "Please provide a valid email",
    },
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password can't be empty!"],
  },

}, { timestamps: true, });

// make password hased for security
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const password = this.password;
  const hashPassword = await bcrypt.hash(password, 8);
  this.password = hashPassword;
  next()
})

userSchema.methods.comparePassword = async function (password, hash) {
  return await bcrypt.compare(password, hash)
}

const User = mongoose.model("User", userSchema);

export default User