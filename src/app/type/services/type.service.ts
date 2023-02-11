import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'src/app/pokemon/models/response.model';
import { environment } from 'src/environment/environment';
import { type } from '../models/type.model';

const API = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  constructor(private httpClient: HttpClient) {}

  getTypes() {
    return this.httpClient.get<response>(`${API}/type`);
  }

  getType(id: string) {
    return this.httpClient.get<type>(`${API}/type/${id}`);
  }
}
