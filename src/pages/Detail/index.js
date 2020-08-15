import React from 'react';
import { GIF_URL } from '@/helpers/server-url';
import { useFetchData, useBeforeMount } from '@/hooks';
import { PokemonDetailService } from '@/services';

import { ActivityIndicator } from '@/components';

function Detail(props) {
  const [pokemonFetch, mutationPokemonFetch] = useFetchData();

  function goToList() {
    props.history.push('/pokemon');
  }

  useBeforeMount(() => {
    PokemonDetailService(mutationPokemonFetch, {
      onError: () => {
        goToList();
      },
    })({ jsonData: { pokemonName: props.match.params.name } });
  });

  function handleClick() {
    goToList();
  }

  return (
    <div>
      {!pokemonFetch.isFulfilled ? (
        <ActivityIndicator />
      ) : (
        <div className="pokemon-detail">
          <div role="presentation" className="pokemon-detail-close-button" onClick={handleClick}>
            X
          </div>
          <div className="pokemon-sort-info">
            <img src={GIF_URL(pokemonFetch.data.name)} alt={pokemonFetch.data.name} />
            <div className="pokemon-name mt-1">{pokemonFetch.data.name}</div>
          </div>
          <div className="pokemon-long-info">
            <div className="mt-2">
              <strong>Id:</strong>
              <span className="ml-1">{pokemonFetch.data.id}</span>
            </div>
            <div className="mt-2">
              <strong>Type:</strong>
              {pokemonFetch.data.types.map((item, index) => {
                return (
                  <span key={index} className="ml-1">
                    {`${item.type.name}`}
                    {index === pokemonFetch.data.types.length - 1 ? '' : ','}
                  </span>
                );
              })}
            </div>
            <div className="mt-2">
              <strong>Height:</strong>
              <span className="ml-1">{pokemonFetch.data.height}</span>
            </div>
            <div className="mt-2">
              <strong>Habilites:</strong>
              <ul>
                {pokemonFetch.data.abilities.map((item, index) => (
                  <li key={index}>{item.ability.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
