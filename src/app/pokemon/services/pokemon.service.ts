import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { pokemon } from '../models/pokemon.model';
import { response } from '../models/response.model';

const API = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getPokemon(id: string | number): Observable<pokemon> {
    return this.httpClient.get<pokemon>(`${API}/pokemon/${id}`);
  }

  getPokemonGeneration(generation: string): Observable<response> {
    switch (generation) {
      case '1': {
        return this.httpClient.get<response>(`${API}/pokemon/?limit=151`);
      }
      case '2': {
        return this.httpClient.get<response>(
          `${API}/pokemon/?limit=100&offset=151`
        );
      }
      case '3': {
        return this.httpClient.get<response>(
          `${API}/pokemon/?limit=135&offset=251`
        );
      }
      case '4': {
        return this.httpClient.get<response>(
          `${API}/pokemon/?limit=107&offset=386`
        );
      }
      case '5': {
        return this.httpClient.get<response>(
          `${API}/pokemon/?limit=156&offset=493`
        );
      }
      case '6': {
        return this.httpClient.get<response>(
          `${API}/pokemon/?limit=72&offset=649`
        );
      }
      case '7': {
        return this.httpClient.get<response>(
          `${API}/pokemon/?limit=88&offset=721`
        );
      }
      case '8': {
        return this.httpClient.get<response>(
          `${API}/pokemon/?limit=96&offset=809`
        );
      }
      case '9': {
        return this.httpClient.get<response>(
          `${API}/pokemon/?limit=103&offset=905`
        );
      }
      default: {
        return this.httpClient.get<response>(`${API}/pokemon/?limit=151`);
      }
    }
  }
}
