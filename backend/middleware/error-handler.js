export default function handleError(error) {
  if (error.name === "ValidationError") {
    let validationErrors = "";
    for (const field in error.errors) {
      if (error.errors.hasOwnProperty(field)) {
        validationErrors = error.errors[field].message;
      }
    }
    return validationErrors;
  }
  if (error.message.includes("E11000 duplicate")) {
    return "Email already exists please login.";
  }
  return error.message;
}