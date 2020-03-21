import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    //labels of the Species & Gender checkbox filter title
    speciesFilterTitle:string = 'Species';
    genderFilterTitle:string = 'Gender';

    //dispatched choices from child(checkboxes) to parent(app component)
    speciesChoicesSelected:[];
    genderChoicesSelected:[];

    //sort order selected on dropdown
    sortOrderSelected:string

    //array of the labels of the checkboxes for Species filter
    speciesTypes = [
        'Human',
        'Alien',
        'Others'
    ];
    //array of the labels of the checkboxes for Gender filter
    genderTypes = [
      'Male',
      'Female'
    ];

    onSelectedChoices(choices:[]) {
      this.speciesChoicesSelected = choices;
    }

    onSelectedGender(choices:[]) {
      this.genderChoicesSelected = choices;
    }

    onSelectedSortedOrder(sortOrderSelected:string) {
      this.sortOrderSelected = sortOrderSelected;
    }
}