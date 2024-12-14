import { ModeToggle } from "@/components/darkmode/mode-toggle";
import { Button } from "@/components/ui/button";
import PokemonList from "@/components/pokemon-list";
import { fetchAllPokemon } from "@/lib/api/fetch-all-pokemon";

export default async function HomePage() {
  const pokemonList = await fetchAllPokemon();

  return (
    <main>
      <Button>Click me</Button>
      <ModeToggle />
      <PokemonList pokemonList={pokemonList} />
    </main>
  );
}
