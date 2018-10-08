import { Component, Input } from '@angular/core';

@Component({
  selector: 'myorg-shell',
  template: `
    <h1>{{ title }}</h1>
    <div>
      <div><a href="learn-more">Learn more about Tuskdesk</a></div>
      <div><a href="learn-more-about-myorg">Learn more about MyOrg</a></div>
      Copyright stuff is in here as well.
    </div>
  `,
  styles: []
})
export class ShellComponent {
  @Input() title: string;
}
