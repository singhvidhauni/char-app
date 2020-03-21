import { MessageServiceService } from './../../services/message-service.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss']
})
export class CheckboxFilterComponent implements OnInit {
    @Input() filterTitle:string;
    @Input() choices:[];
    
    @Output() selectedSpecies = new EventEmitter();
    @Output() selectedGender = new EventEmitter();

    selectedSpeciesChoices = [];
    selectedGenderChoices = [];

    constructor(private msgService:MessageServiceService) { }
    ngOnInit() {
    }
    updateCheckedOption($event, choice:string, title:string) {
      if($event.target.checked) {
          if(title.toLowerCase() === 'species') {
            this.selectedSpeciesChoices.push(choice);
          }
          if(title.toLowerCase() === 'gender') {
            this.selectedGenderChoices.push(choice);
          }
      } else {
          if(title.toLowerCase() === 'species') {
            let index = this.selectedSpeciesChoices.indexOf(choice);
            this.selectedSpeciesChoices.splice(index, 1);
          }
          if(title.toLowerCase() === 'gender') {
            let index = this.selectedGenderChoices.indexOf(choice);
            this.selectedGenderChoices.splice(index, 1);
          }
      }
      if(title.toLowerCase() === 'species') {
        this.selectedSpecies.emit(this.selectedSpeciesChoices);
      }
      if(title.toLowerCase() === 'gender') {
        this.selectedGender.emit(this.selectedGenderChoices)
      }
    }

}
