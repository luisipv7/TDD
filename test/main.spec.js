var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
var { getUser, postUser, putUser } = require("../src/main");
var chai = require("chai");
var expect = chai.expect;
// var sinon = require("sinon");

var mock = new MockAdapter(axios);

mock.onGet("/user/13").reply(200, {
  name: "Titi"
});

const form = {
  email: "Luis",
  senha: "12345"
};

mock.onPost("/user/").reply(200, { form });

mock.onPut("/user/").reply(204, { id: 5 });

describe("main src", () => {
  describe("getUser", () => {
    it("fez o get com sucesso", async () => {
      const Response = await getUser(axios, 13).catch(Err => Err.response);
      console.log("Response first step", Response);

      expect(Response.data).to.be.deep.equal({ name: "Titi" });
      expect(Response.status).to.be.equal(200);
    });

    it("fez o get com falha", async () => {
      const Response = await getUser(axios, 12).catch(Err => Err.response);
      console.log("Response second step", Response.status);
      expect(Response.status).to.be.equal(404);
    });
  });
  describe("postUser", () => {
    // Teste de Login com sucesso
    it("fez post com sucesso", async () => {
      const Response = await postUser(axios, form);
      console.log("Response third step", Response);

      const Login = {
        email: "Luis",
        senha: "12345"
      };

      expect(Response.data.form).to.be.an("object");
      expect(Response.status).to.be.equal(200);
      expect(Response.data.form.email).to.be.deep.equal(Login.email);
      expect(Response.data.form.senha).to.be.deep.equal(Login.senha);
      // mock.restore();
    });
    // Falha teste de Login com sucesso
    it("não fez post com sucesso", async () => {
      const Response = await postUser(axios, form);
      console.log("Aqui muito me interessa saber o que vem,", Response);
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
  describe("putUser", () => {
    // Teste de Acerto
    it("fez o put com sucesso!", async () => {
      const Response = await putUser(axios);
      expect(Response.data.id).to.be.a("number");
      expect(Response.data).to.be.an("object");
      expect(Response.data).to.be.deep.equal({ id: 5 });
      expect(Response.status).to.be.equal(204);
      // console.log(Response.data.formput.id)
     
      afterEach(() => {
        mock.reset();
      });
    });
    // Teste de Acerto em cima do erro
    it("não fez o put com sucesso!", async () => {
      beforeEach(() => {
        mock.restore();
      });
      // const idsPossiveis = [1, 2, 3, 4, 5, 6];
      const Response = await putUser(axios).catch(Err => Err.response);
      console.log("Presta atenção no status >>>", Response);

      // expect(Response.data.formput.id).to.be.not.equal(5);
       expect(Response.status).to.be.equal(404);
      // console.log(Response.data.formput.id)
    });
  });
});
