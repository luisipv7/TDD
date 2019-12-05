function pokemonBattle(pokemon1, pokemon2) {
  if (pokemon1 === "magikarp" || pokemon2 ==="magikarp") {
    return "magikarp";
  }
  else {
    return "pikachu"
  }
}

function staminaSum(num1, num2){
  if (num1 === 13 || num2 === 13){
    if(num1 > num2){
     return num1 - num2
    }
    else{
      return num2 - num1
    }
  } return num1 + num2;
}
module.exports.pokemonBattle = pokemonBattle;
module.exports.staminaSum = staminaSum;