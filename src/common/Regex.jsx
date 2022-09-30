export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
export const validPhone = new RegExp("^[0-9]{10}$");
export const validPin = new RegExp("^[1-9]{1}[0-9]{5}");
export const validName = new RegExp("^[a-zA-Z]{3,}$");
export const validGstin = new RegExp(
  "d{2}[A-Z]{5}d{4}[A-Z]{1}[A-Zd]{1}[Z]{1}[A-Zd]{1}"
);
