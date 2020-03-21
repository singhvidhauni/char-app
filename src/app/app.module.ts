
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharGridComponent } from './components/char-grid/char-grid.component';
import { CheckboxFilterComponent } from './components/checkbox-filter/checkbox-filter.component';
import { SearchComponent } from './components/search/search.component';
import { DropdownSortComponent } from './components/dropdown-sort/dropdown-sort.component';
import { CharacterFilterPipe } from './filters/character.filter.pipe';
import { ChoiceFilterPipe } from './filters/choice.filter.pipe';
import { SortByIDPipe } from './filters/sort-by-id.pipe';
import { DateFormatPipe } from './filters/date-format.filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CharGridComponent,
    CheckboxFilterComponent,
    SearchComponent,
    DropdownSortComponent,
    CharacterFilterPipe,
    ChoiceFilterPipe,
    SortByIDPipe,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
