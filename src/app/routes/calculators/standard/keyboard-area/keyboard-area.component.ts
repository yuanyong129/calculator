import { Component } from "@angular/core";
import { MATH_SYMBOL } from "@share/constant";
import { MatCardModule } from "@angular/material/card";

interface IKeyItem {
  label: string;
  value: string;
  isIcon: boolean;
  iconName?: string;
}

@Component({
  imports: [MatCardModule],
  selector: 'keyboard-area',
  standalone: true,
  templateUrl: './keyboard-area.component.html',
  styles: `
    .keyboard-area {
      flex: 1;
      display: grid;
      grid-template-rows: repeat(6, 1fr);
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  `
})
export class KeyboardAreaComponent {
  keyItems: IKeyItem[] = [
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
    { label: '%', value: MATH_SYMBOL.PERCENT, isIcon: false },
  ];
}
