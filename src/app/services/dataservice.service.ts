
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  constructor(private httpClient:HttpClient) { }
  
  getCharacters():Observable<Character[]> {
    return this.httpClient.get<Character[]>('https://rickandmortyapi.com/api/character/');
  }

}
