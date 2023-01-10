import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

const API = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getAllPokemon(): Observable<Response[]> {
    return this.httpClient.get<Response[]>(`${API}/pokemon/?limit=151`);
  }

  getPokemon(id: string) {
    return this.httpClient.get<Pokemon>(`${API}/pokemon/${id}`);
  }
}
