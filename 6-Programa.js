console.log("Listas")

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDestinos.push(`Curitiba`); // Adicionando itens a lista
console.log(listaDestinos);

listaDestinos.splice(1,1);
console.log(listaDestinos);

console.log(listaDestinos[1]);