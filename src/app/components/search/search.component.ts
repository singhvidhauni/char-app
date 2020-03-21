import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm:string;
  constructor(private msgService:MessageServiceService) { }
  ngOnInit() {
  }
  onSearchTermTyped($event) {
    this.msgService.updateMessage(this.searchTerm);
  }
}
