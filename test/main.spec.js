var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
var { getUser } = require("../src/main");
var chai = require("chai");
var expect = chai.expect;

var mock = new MockAdapter(axios);

mock.onGet("/user/13").reply(200, {
  name: "Titi"
});
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
});
