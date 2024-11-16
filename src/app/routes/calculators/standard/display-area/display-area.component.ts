import { Component, Input } from "@angular/core";

@Component({
  selector: 'display-area',
  standalone: true,
  styles: `
    .display-result {
      font-size: 56px;
    }
  `,
  templateUrl: './display-area.component.html',
})
export class DisplayAreaComponent {
  @Input()
  result: string = "0";
}
