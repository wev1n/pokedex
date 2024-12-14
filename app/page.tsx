import { ModeToggle } from "@/components/darkmode/mode-toggle";
import { Button } from "@/components/ui/button";
import PokemonList from "@/components/pokemon-list";

export default async function HomePage() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  if (!data.ok) {
    throw new Error("Failed to fetch Pokémon data");
  }
  const pokemonList = await data.json();

  console.log(pokemonList);

  return (
    <main>
      <Button>Click me</Button>
      <ModeToggle />
      <PokemonList pokemonList={pokemonList.results} />
    </main>
  );
}
