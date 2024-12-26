export default function handleError(error, req, res, next) {
  let validationErrors = "";
  if (error.name === "ValidationError") {
    for (const field in error.errors) {
      if (error.errors.hasOwnProperty(field)) {
        validationErrors = error.errors[field].message;
      }
    }
  }
  if (error.message.includes("E11000 duplicate")) {
    validationErrors = "Email already exists please login.";
  }
  return res.status(500).json({
    success: false,
    message: validationErrors || error.message,
  });
}
