import { http } from '@/helpers/http';
import { createService } from '@/helpers/create-service';
import * as Constants from './constants';

export const PokemonListService = createService(() => http().get(Constants.POKEMON__URL));

export const PokemonDetailService = createService(({ jsonData }) =>
  http().get(`${Constants.POKEMON_URL + jsonData.pokemonName}/`)
);
