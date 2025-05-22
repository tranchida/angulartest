import { Component } from '@angular/core';
import { HelloComponent } from './message.component';

@Component({
  selector: 'app-root',
  imports: [HelloComponent],
  template: `
      <app-hello/>
  `,
})

export class AppComponent {
}
