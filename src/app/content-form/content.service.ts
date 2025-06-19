import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private http = inject(HttpClient);
  private readonly API_URL = environment.API_URL;

  constructor() {}

  generateContent(payload: any): Observable<any> {
    return this.http
      .post<any>(`${this.API_URL}generate-content`, payload)
      .pipe(map((data) => data));
  }
}
