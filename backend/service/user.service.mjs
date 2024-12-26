import User from "../model/user.model";

export async function findByEmail(email){
  return await User.findOne({email})
}