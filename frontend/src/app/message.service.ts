import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class MessageService {


  constructor(private http: HttpClient) { }

  public GetRandomMessage() {
    return this.http.get('/api/message')
  }
}
