import { bignumber, add, divide, multiply, subtract, sqrt, pow, format } from "mathjs";
export class FMath {
  /**
   * 加法
   */
  static plus(a: number|string, b: number|string): string {
    return add(bignumber(a), bignumber(b)).toString();
  }
  /**
   * 减法
   */
  static minus(a: number|string, b: number|string): string {
    return subtract(bignumber(a), bignumber(b)).toString();
  }
  /**
   * 乘法
   */
  static multiple(a: number|string, b: number|string): string {
    return multiply(bignumber(a), bignumber(b)).toString();
  }
  /** 除法 */
  static divide(a: number|string, b: number|string): string {
    return format(divide(bignumber(a), bignumber(b)), { lowerExp: -12, upperExp: 12 });
  }
  /** 平方根 */
  static squareRoot(a: number|string) {
    return sqrt(bignumber(a));
  }
  /** 平方 */
  static square(a: number|string) {
    return pow(bignumber(a), 2);
  }
  /** 倒数 */
  static reciprocal(a: number|string) {
    return this.divide(1, a);
  }
  /** 取反 */
  static negate(a: number|string ) {
    return this.minus(0, a);
  }
}
