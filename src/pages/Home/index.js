import React, { useState } from 'react';
import { useMounted, useFetchData } from '@/hooks';
import { PokemonListService } from '@/services';

import { Input, ActivityIndicator } from '@/components';
import { Container, GridCard, Card, Logo } from './partials';

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [pokemonsFetch, mutationPokemonsFetch] = useFetchData();

  useMounted(() => {
    PokemonListService(mutationPokemonsFetch, {
      onSuccess: (resp) => {
        setPokemons([...resp.results]);
      },
    })();
  });

  const cardRows = [];
  function mapPokemon(pokemon, key) {
    cardRows.push(<Card key={key} name={pokemon.name} />);
  }

  if (searchQuery !== '') {
    pokemons
      .filter((pokemon) => pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .forEach(mapPokemon);
  } else {
    pokemons.forEach(mapPokemon);
  }

  return (
    <div>
      <Container>
        <Logo />
        {pokemonsFetch.isFulfilled ? (
          <>
            <div className="m-3 text-center">
              <strong>{cardRows.length}</strong>
              <span className="ml-1">Pokemon</span>
            </div>
            <div className="flex justify-center m-5">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
              />
            </div>
            <GridCard>{cardRows}</GridCard>
          </>
        ) : (
          <ActivityIndicator />
        )}
      </Container>
    </div>
  );
}

export default Home;
