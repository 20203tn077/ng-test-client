import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this._http.get<T>(`${environment.apiUrl}/${path}`, { params })
  }

  put<T>(path: string, body: Object = {}): Observable<T> {
    return this._http.put<T>(`${environment.apiUrl}/${path}`, body)
  }

  post<T>(path: string, body: Object = {}): Observable<T> {
    return this._http.post<T>(`${environment.apiUrl}/${path}`, body)
  }

  delete<T>(path: string): Observable<T> {
    return this._http.delete<T>(`${environment.apiUrl}/${path}`)
  }
}
