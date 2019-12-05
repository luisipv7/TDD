var chai = require("chai");
var expect = chai.expect
var Pokemon = require("../src/pokemon")

describe("pokemon src", () => {
  describe("pokemonBattle", () => {
    it("magikarp ganha do camerupt", () => {
      expect(Pokemon.pokemonBattle("magikarp", "camerupt")).to.equal("magikarp");
    });

    it("camerupt perde do magikarp ", () => {
      expect(Pokemon.pokemonBattle("camerupt", "magikarp")).to.equal("magikarp");
    });

    it("pikachu ganha do eevee", () => {
      expect(Pokemon.pokemonBattle("pikachu", "eevee")).to.equal("pikachu");
    });

    // it("bubassauro ganha do onix", () => {
    //   expect(Pokemon.pokemonBattle("bubassauro", "onix")).to.equal("bubassauro");
    // });
  });
  describe("soma staminas", () => {
    describe("casos normais", () => {
      it("soma 1 com 4", () => {
        expect(Pokemon.staminaSum(1, 4)).to.equal(5);
      });

      it("soma 7 com 9", () => {
        expect(Pokemon.staminaSum(7, 9)).to.equal(16);
      });
    });
    describe("casos especiais", () => {
      it("soma 13 com 20", () => {
        expect(Pokemon.staminaSum(13, 20)).to.equal(7);
      });
      it("soma 20 com 13", () => {
        expect(Pokemon.staminaSum(20, 13)).to.equal(7);
      });
    });
  });
});

// describe("outro src", () => {
//   describe("funcao 1 do src", () => {
//     it("teste1", () => {
//       expect(1).to.equals(1);
//     });
//     it("teste2", () => {
//       expect(1).to.equals(2);
//     });
//   });
// });