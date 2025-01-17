import { Component, EventEmitter, Output } from "@angular/core";
import { MATH_SYMBOL } from "@/app/shared/constant";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

interface IKeyItem {
  label?: string;
  value: string;
  isIcon: boolean;
  iconName?: string;
}

@Component({
  imports: [MatButtonModule, MatIconModule],
  selector: 'keyboard-area',
  standalone: true,
  template: `
    @for(item of keyItems; track $index) {
      @if(item.isIcon) {
        <button class="key-button" mat-raised-button (click)="btnClick(item.value)">
          <mat-icon style="width: 30px; height: 30px; font-size: 30px;">{{ item.iconName }}</mat-icon>
        </button>
      } @else {
        <button class="key-button text" mat-raised-button (click)="btnClick(item.value)">
          <span> {{ item.label }}</span>
        </button>
      }
    }
  `,
  styles: `
    .key-button {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      &.text {
        font-size: 28px;
      }
    }
  `
})
export class KeyboardAreaComponent {
  @Output('keyPress') keyPress = new EventEmitter<string>();

  keyItems: IKeyItem[] = [
    { value: MATH_SYMBOL.PERCENT, isIcon: true, iconName: 'percent-outline' },
    { label: 'CE', value: MATH_SYMBOL.CLEAR_ERROR, isIcon: false },
    { label: 'C', value: MATH_SYMBOL.CLEAR, isIcon: false },
    { value: MATH_SYMBOL.BACK, isIcon: true, iconName: 'backspace-outline' },

    { value: MATH_SYMBOL.RECIPROCAL, label: MATH_SYMBOL.RECIPROCAL, isIcon: false },
    { value: MATH_SYMBOL.SQUARE, label: MATH_SYMBOL.SQUARE, isIcon: false },
    { value: MATH_SYMBOL.SQUARE_ROOT, isIcon: false, label: '√x' },
    { value: MATH_SYMBOL.DIVIDE, isIcon: false, label: '÷' },

    { value: '7', label: '7', isIcon: false },
    { value: '8', label: '8', isIcon: false },
    { value: '9', label: '9', isIcon: false },
    { value: MATH_SYMBOL.MULTIPLE, isIcon: false, label: '×' },

    { value: '4', label: '4', isIcon: false },
    { value: '5', label: '5', isIcon: false },
    { value: '6', label: '6', isIcon: false },
    { value: MATH_SYMBOL.MINUS, isIcon: false, label: '－' },

    { value: '1', label: '1', isIcon: false },
    { value: '2', label: '2', isIcon: false },
    { value: '3', label: '3', isIcon: false },
    { value: MATH_SYMBOL.PLUS, isIcon: false, label: '＋' },

    { value: MATH_SYMBOL.NEGATE, isIcon: false, label: '±' },
    { value: '0', label: '0', isIcon: false },
    { value: MATH_SYMBOL.POINT, label: MATH_SYMBOL.POINT, isIcon: false },
    { value: MATH_SYMBOL.EQUAL, isIcon: false, label: '＝' },
  ];

  btnClick(val: string) {
    this.keyPress.emit(val);
  }
}
