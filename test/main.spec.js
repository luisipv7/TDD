var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
var { getUser, postUser } = require("../src/main");
var chai = require("chai");
var expect = chai.expect;

var mock = new MockAdapter(axios);

mock.onGet("/user/13").reply(200, {
  name: "Titi"
});

const form = {
  email: "Luis",
  senha: "12345"
};

mock.onPost("/user/").reply(200, { form });

describe("main src", () => {
  describe("getUser", () => {
    it("fez o get com sucesso", async () => {
      const Response = await getUser(axios, 13).catch(Err => Err.response);

      expect(Response.data).to.be.deep.equal({ name: "Titi" });
      expect(Response.status).to.be.equal(200);
    });

    it("fez o get com falha", async () => {
      const Response = await getUser(axios, 12).catch(Err => Err.response);

      expect(Response.status).to.be.equal(404);
    });
  });

  // Teste de Login com sucesso
  describe("postUser", () => {
    it("fez post com sucesso", async () => {
      const Response = await postUser(axios, form);

      const Login = {
        email: "Luis",
        senha: "12345"
      };

      expect(Response.data.form).to.be.an("object");
      expect(Response.status).to.be.equal(200);
      expect(Response.data.form.email).to.be.deep.equal(Login.email);
      expect(Response.data.form.senha).to.be.deep.equal(Login.senha);
    });
  });
  // Falha teste de Login com sucesso 
  describe("postUser", () => {
    it("não fez post com sucesso", async () => {
      const Response = await postUser(axios, form);

      const Login = {
        email: "Titi",
        senha: "54321"
      };

      expect(Response.data.form).to.be.an("object");
      expect(Response.status).to.be.equal(200);
      expect(Response.data.form.email).to.be.not.deep.equal(Login.email);
      expect(Response.data.form.senha).to.be.not.deep.equal(Login.senha);
    });
  });
});
