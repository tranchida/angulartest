import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class MessageService {

  private http = inject(HttpClient);

  constructor() { }

  public GetRandomMessage() : string {

    var msg = "No message";

    this.http.get('/api/message').subscribe(
      (res: any) => {
        msg = res.message;
      }
    )

    return msg;

  }
}
