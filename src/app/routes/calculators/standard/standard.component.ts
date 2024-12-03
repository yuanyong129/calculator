import { Component } from "@angular/core";
import { DisplayAreaComponent } from "./display-area/display-area.component";
import { KeyboardAreaComponent } from './keyboard-area/keyboard-area.component';
import { FMath } from "@/app/shared/utils/math";
import { MATH_SYMBOL } from "@/app/shared/constant";
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
  result: string = "0";
  expression: string = "";

  calc() {
    this.expression += this.result;
    this.result = this.calcExpression(this.expression);
    // isFinished = true;
  }

  calcExpression(expression: string) {
    let result = '';
    if(expression.includes(MATH_SYMBOL.PLUS)) {
      const [a, b] = expression.split(MATH_SYMBOL.PLUS);
      result = FMath.plus(a, b).toString();
    }
    if(expression.includes(MATH_SYMBOL.MINUS)) {
      const [a, b] = expression.split(MATH_SYMBOL.MINUS);
      result = FMath.minus(a, b).toString();
    }
    if(expression.includes(MATH_SYMBOL.MULTIPLE)) {
      const [a, b] = expression.split(MATH_SYMBOL.MULTIPLE);
      result = FMath.multiple(a, b).toString();
    }
    if(expression.includes(MATH_SYMBOL.DIVIDE)) {
      const [a, b] = expression.split(MATH_SYMBOL.DIVIDE);
      result = FMath.divide(a, b).toString();
    }
    return result;
  }

  onKeyPress(val: string) {
    switch (val) {
      case MATH_SYMBOL.PERCENT:
        this.result = FMath.divide(this.result, 100).toString();
        break;
      case MATH_SYMBOL.CLEAR:
        this.expression = '';
        this.result = '0';
        break;
      case MATH_SYMBOL.CLEAR_ERROR: //清空
        this.result = '0';
        break;
      case MATH_SYMBOL.BACK: // 消除
        this.result = this.result.length > 0 ? this.result.substring(0, this.result.length - 1) : ''
        break;
      case MATH_SYMBOL.RECIPROCAL: // 倒数
        this.result = FMath.reciprocal(this.result).toString();
        break;
      case MATH_SYMBOL.SQUARE: // 平方
        this.result = FMath.square(this.result).toString();
        break;
      case MATH_SYMBOL.SQUARE_ROOT: //平方根
        this.result = FMath.squareRoot(this.result).toString();
        break;
      case MATH_SYMBOL.PLUS: // 加法
        this.expression = this.result + '+';
        this.result = '';
        break;
      case MATH_SYMBOL.MINUS: // 减法
        this.expression = this.result + '-';
        this.result = '';
        break;
      case MATH_SYMBOL.MULTIPLE: // 乘法
        this.expression = this.result + '×';
        this.result = '';
        break;
      case MATH_SYMBOL.DIVIDE: // 除法
        this.expression = this.result + '÷';
        this.result = '';
        break;
      case '0':
        this.result += '0';
        break;
      case MATH_SYMBOL.POINT:
        if(!this.result.includes('.'))
        this.result += '.';
        break;
      case MATH_SYMBOL.EQUAL:
        this.calc();
        break;
      case MATH_SYMBOL.NEGATE:
        this.result = FMath.negate(this.result).toString();
        break;
      default:
        if(this.result !== '0') this.result += val;
        else this.result = val;
        break;
    }
  }
}
