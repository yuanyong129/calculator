import { Component } from "@angular/core";
import { DisplayAreaComponent } from "./display-area/display-area.component";
import { KeyboardAreaComponent } from './keyboard-area/keyboard-area.component';
@Component({
  imports: [DisplayAreaComponent, KeyboardAreaComponent],
  standalone: true,
  templateUrl: './standard.component.html',
  styles: `
    .standard-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: calc(100vh - var(--mat-toolbar-standard-height));
    }

    display-area {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      height: 160px;
      padding: 12px;
      box-sizing: border-box;
    }

    keyboard-area {
      flex: 1;
      display: grid;
      grid-template-rows: repeat(6, 1fr);
      grid-template-columns: 1fr 1fr 1fr 1fr;
      padding: 12px;
      box-sizing: border-box;
      gap: 12px;
    }

  `
})
export class StandardComponent {
  result = "0";
}
