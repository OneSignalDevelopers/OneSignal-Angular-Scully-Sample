import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dog } from 'src/dog';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient) { }

  getDogs():Observable<Dog[] | null> {
    return this.http.get<Dog[]>('https://scully-snipcart-api.netlify.app/products.json');
  }

  getDogsById(id: string): Observable<Dog | null> {
    return this.getDogs()
      .pipe(map(dogs => {
        const filtered = dogs.filter(x => x.id === id);

        if (filtered.length > 0) {
          return filtered[0];
        }
        return null;
      }));
  }
}