import { Component, Injectable } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message";

@Component({
  selector: "app-hello",
  template: `
    <div class="text-center p-4 bg-blue-500 text-white">
        <div> {{message.id}} {{ message.message }} / {{ message.language }}</div>
        <button class="mt-4 px-4 py-2 bg-blue-700 text-white rounded" (click)="change()">Change Message</button>
        <button class="mt-4 px-4 py-2 bg-blue-700 text-white rounded" (click)="list()">List Messages</button>
        <button class="mt-4 px-4 py-2 bg-blue-700 text-white rounded" (click)="clear()">Clear Messages</button>
        <div class="mt-2">
          <ul>
            @for (msg of messages; track msg.id; let i = $index) {
              <li>{{ i }} {{msg.id + 1}} / {{ msg.message }} / {{ msg.language }} </li>
            }
          </ul>
        </div>
    </div>
  `,
})
export class HelloComponent {
  message: Message = { id: 0, message: '', language: '' };
  messages: Message[] = [];

  constructor(private messageService: MessageService) { }

  change() {
    this.messageService.GetRandomMessage().subscribe({
      next: (response: Message) => {
        this.message = response;
      },
      error: (error) => {
        // Handle the error here
        console.error('Erreur lors de la récupération du message:', error);
      }
    });
  }

  list() {
    this.messageService.GetAllMessages().subscribe({
      next: (response: Message[]) => {
        this.messages = response;
      },
      error: (error) => {
        // Handle the error here
        console.error('Erreur lors de la récupération des messages:', error);
      }
    });
  }

  clear() {
    this.messages = [];
  }
}
