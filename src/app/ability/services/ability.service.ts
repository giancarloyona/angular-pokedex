import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, expand, reduce, tap } from 'rxjs';
import { response } from 'src/app/pokemon/models/response.model';
import { environment } from 'src/environment/environment';
import { ability } from '../models/ability.model';

const API = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class AbilityService {
  constructor(private httpClient: HttpClient) {}

  getAbilities(): Observable<response> {
    return this.httpClient
      .get<response>(`${API}/ability`)
      .pipe(
        expand((x: response) =>
          x.next ? this.httpClient.get<response>(x.next) : EMPTY
        )
      );
  }

  getAbilityByID(id: string): Observable<ability> {
    return this.httpClient.get<ability>(`${API}/ability/${id}`);
  }
}
