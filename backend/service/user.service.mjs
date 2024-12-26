import User from "../model/user.model.mjs";

export async function findByEmail(email){
  return await User.findOne({email})
}