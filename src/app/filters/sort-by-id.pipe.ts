import { Character } from './../models/character';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByID',
  pure: false
})
export class SortByIDPipe implements PipeTransform {
    transform(characters: Character[], order:string="asc"): Character[] {
      if(!characters)
        return characters
      if(order === 'desc')
        characters.sort((a:Character, b:Character) => -1);
      else
        characters.sort((a:Character, b:Character) => 1);
        return characters;
    }
}
