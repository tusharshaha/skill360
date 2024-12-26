import User from "../model/user.model.mjs";
import { findByEmail } from "../service/user.service.mjs";

export async function createUser(req, res, next) {
  try {
    const newUser = req.body;
    const user = await User.create(newUser);
    const { password, ...data } = user.toObject();
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await findByEmail(email);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No user found! please create and account",
      });
    }
    const comparePass = await user.comparePassword(password, user.password);

    if (!comparePass) {
      return res.status(403).json({
        success: false,
        message: "Email or password is not correct!",
      });
    }

    const { password: pass, ...data } = user.toObject();

    res.status(200).json({
      success: true,
      message: "Login completed successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
}
