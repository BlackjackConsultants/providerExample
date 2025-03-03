import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataStorage } from '../interfaces/data-storage';

@Injectable({
  providedIn: 'root'
})
export class RestApiService implements DataStorage<string> {
  private apiUrl = 'https://your-api.com/data';

  constructor(private http: HttpClient) {}

  saveData(data: any): Observable<any> {
    console.debug('%cSaving from RestApiService:', 'background-color:red;color:white;', data);
    return this.http.post(this.apiUrl, data);
  }
}
