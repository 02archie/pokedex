import { Injectable } from '@angular/core';
import { Constants } from '../../common/constants/backend';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pager } from "../../common/pager/models/pager";

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  url = `${Constants.API_URL}`;

  constructor(private httpClient: HttpClient) {}

  //get all pokemon
  getPokemon(): Observable<any> {
    return this.httpClient.get(this.url + `pokemon/`);
  }

  //get pokemon by id 
  getPokemonByid(id: any): Observable<any> {
    return this.httpClient.get(this.url + `pokemon/${id}`);
  }

}
