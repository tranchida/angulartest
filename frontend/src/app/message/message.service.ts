import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable({ providedIn: 'root'})
export class MessageService {


  constructor(private http: HttpClient) { }

  public getRandomMessage() : Observable<Message> {
    return this.http.get<Message>('/api/message')
  }

  public getAllMessages() : Observable<Message[]> {
    return this.http.get<Message[]>('/api/messages') 
  }
              
}
