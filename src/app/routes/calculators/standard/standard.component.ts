import { Component } from "@angular/core";
import { DisplayAreaComponent } from "./display-area/display-area.component";
import { KeyboardAreaComponent } from './keyboard-area/keyboard-area.component';
import { FMath } from "@/app/shared/utils/math";
import { MATH_SYMBOL } from "@/app/shared/constant";
@Component({
  imports: [DisplayAreaComponent, KeyboardAreaComponent],
  standalone: true,
  template: `
    <div class="standard-container">
      <display-area [result]="result" [expression]="expression"></display-area>
      <keyboard-area (keyPress)="onKeyPress($event)"></keyboard-area>
    </div>
  `,
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
  result: string = '0';
  expression: string = '';
  isFinished: boolean = false;
  private readonly operatorPattern = /[+\-×÷]$/;

  calc() {
    if (this.result === 'Error') {
      return;
    }

    if (!this.expression) {
      return;
    }

    const expression = this.operatorPattern.test(this.expression)
      ? `${this.expression}${this.result}`
      : this.expression;

    this.result = this.calcExpression(expression);
    this.expression = '';
    this.isFinished = true;
  }

  calcExpression(expression: string) {
    return FMath.evaluate(expression);
  }

  private resetAfterError() {
    this.result = '0';
    this.expression = '';
    this.isFinished = false;
  }

  private appendOperator(operator: string) {
    if (this.result === 'Error') {
      this.resetAfterError();
    }

    if (!this.expression) {
      this.expression = `${this.result}${operator}`;
      this.result = '0';
      this.isFinished = false;
      return;
    }

    if (this.operatorPattern.test(this.expression)) {
      this.expression = this.expression.slice(0, -1) + operator;
      return;
    }

    const computed = this.calcExpression(`${this.expression}${this.result}`);
    this.expression = `${computed}${operator}`;
    this.result = '0';
    this.isFinished = false;
  }

  onKeyPress(val: string) {
    if (this.result === 'Error' && val !== MATH_SYMBOL.CLEAR && val !== MATH_SYMBOL.CLEAR_ERROR) {
      this.resetAfterError();
    }

    switch (val) {
      case MATH_SYMBOL.PERCENT:
        this.result = FMath.divide(this.result, 100);
        this.isFinished = true;
        break;
      case MATH_SYMBOL.CLEAR:
        this.resetAfterError();
        break;
      case MATH_SYMBOL.CLEAR_ERROR:
        this.result = '0';
        this.isFinished = false;
        break;
      case MATH_SYMBOL.BACK:
        if (this.isFinished || this.result === 'Error') {
          this.result = '0';
        } else if (this.result.length <= 1 || this.result === '-0') {
          this.result = '0';
        } else {
          this.result = this.result.slice(0, -1);
        }
        break;
      case MATH_SYMBOL.RECIPROCAL:
        this.result = FMath.reciprocal(this.result);
        this.isFinished = true;
        break;
      case MATH_SYMBOL.SQUARE:
        this.result = FMath.square(this.result);
        this.isFinished = true;
        break;
      case MATH_SYMBOL.SQUARE_ROOT:
        this.result = FMath.squareRoot(this.result);
        this.isFinished = true;
        break;
      case MATH_SYMBOL.PLUS:
        this.appendOperator(MATH_SYMBOL.PLUS);
        break;
      case MATH_SYMBOL.MINUS:
        this.appendOperator(MATH_SYMBOL.MINUS);
        break;
      case MATH_SYMBOL.MULTIPLE:
        this.appendOperator(MATH_SYMBOL.MULTIPLE);
        break;
      case MATH_SYMBOL.DIVIDE:
        this.appendOperator(MATH_SYMBOL.DIVIDE);
        break;
      case '0':
        if (this.isFinished) {
          this.result = '0';
          this.isFinished = false;
        } else if (this.result !== '0') {
          this.result += '0';
        }
        break;
      case MATH_SYMBOL.POINT:
        if (this.isFinished) {
          this.result = '0.';
          this.isFinished = false;
        } else if (!this.result.includes('.')) {
          this.result += '.';
        }
        break;
      case MATH_SYMBOL.EQUAL:
        this.calc();
        break;
      case MATH_SYMBOL.NEGATE:
        this.result = FMath.negate(this.result);
        this.isFinished = true;
        break;
      default:
        if (this.isFinished || this.result === '0') {
          this.result = val;
        } else {
          this.result += val;
        }
        this.isFinished = false;
        break;
    }
  }
}
