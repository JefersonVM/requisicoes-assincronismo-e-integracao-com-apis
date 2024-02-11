const img = document.querySelector("img");
const h1 = document.querySelector("h1");
const span = document.querySelector("span");

async function detalharPokemom() {
  try {
    const response = await api.get("/pokemon/pikachu");

    const pokemon = response.data;

    img.src = pokemon.sprites.other.dream_world.front_default;
    h1.textContent = pokemon.name;
    span.textContent = `A: ${pokemon.weight}cm L: ${pokemon.height}cm`;
  } catch (error) {
    console.log(error);
  }
}

detalharPokemom();
