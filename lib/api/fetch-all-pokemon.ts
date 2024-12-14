export async function fetchAllPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  if (!res.ok) {
    throw new Error(`Failed to fetch pokemon data: ${res.statusText}`);
  }

  const data = await res.json();
  return data.results;
}
