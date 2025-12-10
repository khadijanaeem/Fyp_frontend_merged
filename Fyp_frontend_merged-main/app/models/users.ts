/*import mongoose, { Schema, models } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  google_access_token: { type: String },
  google_refresh_token: { type: String },
});
async function getTokensFromDB(email: string) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");
  return {
    access_token: user.google_access_token,
    refresh_token: user.google_refresh_token,
  };
}
const User = models.User || mongoose.model("User", UserSchema);
export default User;*/
import { connectToDB } from "@/services/mongodb";

export async function findUserByEmail(email: string) {
  const db = await connectToDB();
  return db.collection("users").findOne({ email });
}
