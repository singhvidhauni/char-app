import { MessageServiceService } from './../../services/message-service.service';
import { DataserviceService } from './../../services/dataservice.service';
import { Character } from './../../models/character';
import { Component, OnInit, Input } from '@angular/core';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-char-grid',
  templateUrl: './char-grid.component.html',
  styleUrls: ['./char-grid.component.scss']
})
export class CharGridComponent implements OnInit {
  //to accept choices of species from the app component 
  @Input() speciesChoices:[];
  @Input() genderChoices:[];

  //to accept sortOrder (Ascending/Descending) from the app component
  @Input() sortOrder:string; 

  //Observable to hold the characters fetched from the API and being used with async pipe
  characters$ : Observable<Character[]>;
  searchTerm:string;

  subscriptionSearchTerm:any;

  constructor(private dataService:DataserviceService, private msgService:MessageServiceService) { }
  ngOnInit() {
     this.characters$ = this.dataService.getCharacters();
     this.subscriptionSearchTerm = this.msgService.getSearchTerm().subscribe(searchT => this.searchTerm = searchT );
  }
  ngOnDestroy() {
    this.subscriptionSearchTerm.unsubscribe();
  }
}

