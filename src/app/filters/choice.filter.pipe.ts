import { Character } from '../models/character';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'choiceFilter',
    pure: false
})
export class ChoiceFilterPipe implements PipeTransform {
    tempChoices = [];
    tempSpeciesGender = [];
    tempGender = [];
    
    transform(characters: Character[], species:any = [], gender:any = []): Character[] {
        if(!characters || !species) {
            return characters
        } 
        if(species.length < 1 && gender.length < 1) {
            return characters;
        }
        if(species.length > 0) {
            this.tempChoices = [];
            for( let i =0;i<characters.length; i++) {
                for(let j = 0;j<species.length;j++) {
                    if(characters[i].species.toLowerCase() === species[j].toLowerCase()) {
                        this.tempChoices.push(characters[i]);
                    }
                }
            }
        } 
        if(this.tempChoices.length > 0  && gender.length > 0) {
            this.tempSpeciesGender = [];
            for( let i =0;i<this.tempChoices.length; i++) {
                for(let j = 0;j<gender.length;j++) {
                    if(this.tempChoices[i].gender.toLowerCase() === gender[j].toLowerCase()) {
                        this.tempSpeciesGender.push(this.tempChoices[i]);
                    }
                }
            }
            return this.tempSpeciesGender;
        }
        if(this.tempChoices.length < 1 && gender.length > 0) {
            this.tempGender = [];
            for( let i =0;i <characters.length; i++) {
                for(let j = 0;j<gender.length;j++) {
                    if(characters[i].gender.toLowerCase() === gender[j].toLowerCase()) {
                        this.tempGender.push(characters[i]);
                    }
                }
            }
            return this.tempGender;
        }
        return this.tempChoices;
    }
}
