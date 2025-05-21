import { Component, Injectable } from "@angular/core";
import { signal } from "@angular/core";
import { MessageService } from "./message.service";

@Component({
  selector: "app-hello",
  template: `
    <div class="text-center p-4 bg-blue-500 text-white">
        <div> {{ message() }}</div>
        <button class="mt-4 px-4 py-2 bg-blue-700 text-white rounded" (click)="change()">Change Message</button>
    </div>
  `,
})

export class HelloComponent {

    message = signal("Hello, Angular!");

    constructor(private messageService: MessageService) {
    }

    change() {
      this.message.set(this.messageService.GetRandomMessage());
    }
}