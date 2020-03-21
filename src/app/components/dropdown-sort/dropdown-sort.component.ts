import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-dropdown-sort',
  templateUrl: './dropdown-sort.component.html',
  styleUrls: ['./dropdown-sort.component.scss']
})

export class DropdownSortComponent {
    submitted = false;
    sortOrders: any = [{label:'Ascending',id:'asc'}, {label:'Descending', id:'desc'}];

    @Output() selectedSortOrder = new EventEmitter();

    constructor(public fb: FormBuilder) { }

    sortOrderForm = this.fb.group({ 
      name: ['', [Validators.required]]
    })

    /* Select Dropdown error handling */
    public handleError = (controlName: string, errorName: string) => {
      console.log('handleError ',controlName, ' errorName',errorName )
      return this.sortOrderForm.controls[controlName].hasError(errorName);
    }
    onOptionSelected(option) {
      this.selectedSortOrder.emit(option);
      this.submitted = true;
    }
}
