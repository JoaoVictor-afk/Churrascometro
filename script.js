let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function calcular() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
  let qdtTotalCerveja = cervejaPP(duracao) * adultos;
  let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

  resultado.innerHTML = `<p><i class="fas fa-drumstick-bite"></i> ${qdtTotalCarne /1000}kg de Carne</p>`
  resultado.innerHTML += `<p><i class="fas fa-cocktail"></i> ${Math.ceil(qdtTotalCerveja/350 )} Latas de Cerveja</p>`
  resultado.innerHTML += `<p><i class="fas fa-wine-bottle"></i> ${Math.ceil(qdtTotalBebidas/2000 )} Pet's 2l de Bebidas</p>`


}
function carnePP(duracao) {
  if(duracao >= 6){
    return 800  
  }else
{
    return 600
}
}

function cervejaPP(duracao) {
    if(duracao >= 6){
      return 2200  
    }else
  {
      return 1200
  }
  }


  function bebidasPP(duracao) {
    if(duracao >= 6){
      return 1500  
    }else
  {
      return 1000
  }
  }
  
  