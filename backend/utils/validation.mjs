export function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@(?:gmail|yahoo|hotmail|outlook)\.com$/;
  return regex.test(email);
}

export function isStrongPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*\d).{6,}$/;
  return regex.test(password);
}
