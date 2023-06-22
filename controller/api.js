const loginApi = (req, res) => {
  res.send("Login success");
  
};

const aboutApi = (req, res) => {
  res.send("About us Page");
};

const registerApi = (req, res) => {
  res.send("userRegosterd");
};
module.exports = { loginApi, aboutApi, registerApi };
