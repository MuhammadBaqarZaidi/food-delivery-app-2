import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
    email: { type: String, required: false, unique: true },
    isAdmin: { type: Boolean, required: false, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
