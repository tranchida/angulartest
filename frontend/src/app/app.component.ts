import { Component } from '@angular/core';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-root',
  imports: [MessageComponent],
  template: `
      <app-message/>
  `,
})

export class AppComponent {
}
