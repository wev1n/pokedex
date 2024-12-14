import { ModeToggle } from "@/components/darkmode/mode-toggle";
import Header from "@/components/header";
import PokemonList from "@/components/pokemon-list";
import { fetchAllPokemon } from "@/lib/api/fetch-all-pokemon";

export default async function HomePage() {
  const pokemonList = await fetchAllPokemon();

  return (
    <div>
      <Header />

      <main>
        <ModeToggle />
        <PokemonList pokemonList={pokemonList} />
      </main>
    </div>
  );
}
