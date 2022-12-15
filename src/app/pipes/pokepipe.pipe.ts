import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokepipe'
})
export class PokepipePipe implements PipeTransform {

  transform(value: any, args: any): any {
   const resultsPokemons =[];
   for (const pokemon of value) {
    if (pokemon.name.toLowerCase().indexOf(args.toLowerCase())>-1) {
      resultsPokemons.push(pokemon)
    }
   }
   return resultsPokemons;
  }

}
