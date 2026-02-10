export const fetchPokemonList = async (limit = 20, offset = 0) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data = await res.json();

  const detailed = await Promise.all(
    data.results.map(async (p) => {
      const detailRes = await fetch(p.url);
      return await detailRes.json();
    })
  );

  return detailed;
};

export const fetchPokemonDescription = async (pokemonId) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
  const data = await res.json();
  
  // Get English flavor text
  const flavorText = data.flavor_text_entries.find(
    entry => entry.language.name === 'en'
  );
  
  return flavorText ? flavorText.flavor_text.replace(/\f/g, ' ') : 'No description available.';
};

