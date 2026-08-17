import { Injectable } from '@nestjs/common';
import { AxiosAdapter } from '../common/adapters/axios.adapter';
import { PokemonService } from '../pokemon/pokemon.service';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  constructor(
    private readonly pokemonService: PokemonService,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const arrayPokemonPromises = data.results.map(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];

      return { name, no };
    });

    return await this.pokemonService.createSeed(arrayPokemonPromises);
  }
}
