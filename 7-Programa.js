console.log(`Trabalhando com condicionais`);

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 15;
const estaAcompanhado = true;

console.log(`Destinhos possíveis: `);
console.log(listaDestinos);

if(idadeComprador >= 18 || estaAcompanhado == true){
    console.log(`Boa Viagem!`);
}

else{
    console.log(`Não é possível vender`);
}
