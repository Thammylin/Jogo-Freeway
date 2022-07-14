//código do carro

//listas dos carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150,210, 270, 310];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50
let alturaCarro = 40

function mostraCarro(){
  //laços de repetição
  for (let i = 0; i < imagemCarros.length; i ++){
   image(imagemCarros[i],xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i ++){
    xCarros[i] -= velocidadeCarros[i];
 }
    
}

function voltaPsicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i ++){
    if (passouTodaAtela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaAtela(xCarro){
  return xCarro < - 50;
}