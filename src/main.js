async function getUser(axios, userId) {
  return axios.get("/user/" + userId)
}
module.exports.getUser = getUser;
