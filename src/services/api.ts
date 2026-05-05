export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonResponse = {
  results: Pokemon[];
};

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemon = async (
  search: string,
  page: number
): Promise<Pokemon[]> => {
  const limit = 10;
  const offset = (page - 1) * limit;

  const res = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data: PokemonResponse = await res.json();

  if (search) {
    return data.results.filter((item) =>
      item.name.includes(search.toLowerCase())
    );
  }

  return data.results;
};
