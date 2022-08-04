import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private url = 'https://api.thecatapi.com/v1/breeds';
  private url_by_breed = 'https://api.thecatapi.com/v1/images/search?breed_ids=';

  constructor(private httpClient: HttpClient) { }

  getCats () {
    return this.httpClient.get(this.url);
  }
}
