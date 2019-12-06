async function getUser(axios, userId) {
  return axios.get("/user/" + userId)
}

async function postUser(axios, form) {
  return axios.post("/user/", form )
}

module.exports.postUser = postUser;
module.exports.getUser = getUser;