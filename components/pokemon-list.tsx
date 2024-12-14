import { Pokemon } from "@/types";
import Link from "next/link";

export default function PokemonList({
  pokemonList,
}: {
  pokemonList: Pokemon[];
}) {
  return (
    <div>
      <ul>
        {pokemonList.map((pokemon: Pokemon) => (
          <li key={pokemon.name}>
            <Link href="#">{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
