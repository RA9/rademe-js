/*-- Password Manipulation --*/
// Password Creator and Generator

lib.password = {};

const gen_alpha_char = (lib.password.gen_alpha_char = () => {
  const char =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/?@#$%^&*(+-){|,<>";
  const rand_num = Math.floor(Math.random() * char.length);
  return char[rand_num];
});

const gen = (lib.password.gen = len => {
  let result = "";
  for (let index = 0; index < len; index++) {
    result += gen_alpha_char();
  }
  return result;
});

const clean = (lib.password.clean = str => {
  return str.replace(/\s/g, "");
});

const check_pass = (lib.password.check_pass = pass => {
  if (isString(pass)) {
    if (pass.length >= 8) {
      const pattern = /[a-zA-Z0-9@-|]/g;
      return pattern.test(pass);
    }
  }
});
