import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService2Service {
  constructor(private http: HttpClient) {
  }

  searchIn(searchText: string): Observable<any> {
    return this.http.get('https://api.jikan.moe/v4/manga', {
      params: {
        q: searchText
      }
    }).pipe(map((value: any) => value.data))
  }
}

