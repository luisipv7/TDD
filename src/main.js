async function getUser(axios, userId) {
  return axios.get("/user/" + userId)
}

async function postUser(axios, form) {
  return axios.post("/user/", form )
}

async function putUser(axios, form){
  return axios.put("/user/", form)
}

module.exports.getUser = getUser;
module.exports.postUser = postUser;
module.exports.putUser = putUser;