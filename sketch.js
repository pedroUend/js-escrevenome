let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  
  let palavras = ["aula", "tecnologia", "robotica", "1 seria A"];
  
  return random(palavras);
}

function inicializaCores() {
  background("#A3F0A6");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  
  inicializaCores();

  let texto = palavraParcial(0, width);
    
  text(texto, 200, 200);
  modoNoturno();  
}

function modoNoturno(hora) {
  
  let horario = hour();
  
  if (horario > 5) {
    console.log("Você precisa ligar o modo escuro!");
  } else {
    
    console.log("Modo noturno não é necessário neste momento.");
  }
}

