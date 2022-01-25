import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `Top bar will go here.`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
}
