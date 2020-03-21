import { Character } from '../models/character';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'characterFilter'
})
export class CharacterFilterPipe implements PipeTransform {
    transform(characters: Character[], searchTerm:string): Character[] {
        if(!characters || !searchTerm) {
            return characters
        }
        return characters.filter(char => char.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
