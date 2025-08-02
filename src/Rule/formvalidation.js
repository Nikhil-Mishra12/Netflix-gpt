export function formvalidation(email, password) {

  const isemailvalid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  const ispasswordvalid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  if (!isemailvalid) return "Email is wrong";
  if (!ispasswordvalid) return "Password is wrong";

  return null;
}