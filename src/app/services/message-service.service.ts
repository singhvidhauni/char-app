import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
    private searchTerm = new Subject<string>();
    
    constructor() { }

    getSearchTerm():Observable<string> {
        return this.searchTerm.asObservable();
    }
    updateMessage(searchTerm:string) {
      this.searchTerm.next(searchTerm);
    }
}
