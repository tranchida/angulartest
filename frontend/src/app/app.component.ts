import { Component } from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'app-root',
  imports: [HelloComponent],
  template: `
      <app-hello/>
  `,
})

export class AppComponent {
}
