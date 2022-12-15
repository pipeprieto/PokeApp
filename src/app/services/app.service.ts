import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private url: string = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http.get<ResponsePokes>(`${this.url}pokemon`);
  }

  getAllPokemonsData(url:string) {
    return this.http.get(`${url}`)
  }

  getPokemonDataByName(name:string) {
    return this.http.get(`${this.url}pokemon/${name}`);
  }

  getPokemonDataById(id:string) {
    return this.http.get(`${this.url}pokemon/${id}`);
  }

  createPokemon() {}

  deletePokemon() {}

}

export interface ResponsePokes {
  results:[{
    name:string,
    url:string
  }];
}

export interface Pokemon {
  abilities: Array<Object>;
  base_experience: number;
  forms: Array<Object>;
  game_indices: Array<Object>;
  height: number;
  held_items: Array<any>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<Object>;
  name:string;
  order:number;
  past_types:Array<any>;
  species:Object;
  sprites:Array<Object>;
  stats:Array<any>
  types:Array<any>
  weight:number;
}
