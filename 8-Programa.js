console.log(`Loops`);

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhado = false;
let passagemComprada = false;
const destino = "São Paulo";
let destinoExiste = false;

const podeComprar = (idadeComprador >= 18 || estaAcompanhado == true);
let contador = 0;

/* 
while (contador < 3){
    if(listaDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}
 */

for(let i = 0; i < 3 ; i+=1) {
    if(listaDestinos[i] == destino) {
        destinoExiste = true;
        break;
    }
}

console.log(`Destinho existe: ${destinoExiste}`)

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
}

else {
    console.log("Ocorreu um erro!")
}