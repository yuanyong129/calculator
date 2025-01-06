import { Component, Input } from "@angular/core";

@Component({
  selector: 'display-area',
  standalone: true,
  template: `
    <div class="display-expression">
      {{ expression }}
    </div>
    <div class="display-result">
      {{ result }}
    </div>
  `,
  styles: `
    .display-result {
      font-size: 56px;
      line-height: 56px;
    }
    .display-expression {
      font-size: 24px;
      line-height: 24px;
      margin-bottom: 8px;
    }
  `,
})
export class DisplayAreaComponent {
  @Input()
  result: string = "0";
  @Input()
  expression: string = "";
}
