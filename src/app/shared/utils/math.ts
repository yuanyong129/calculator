export class FMath {
  /**
   * @name 加法
   */
  static plus(a: number|string, b: number|string): number {
    if(typeof a === 'string')
      a = Number(a);
    if(typeof b === 'string')
      b = Number(b);
    return a + b;
  }
  /**
   * @name 减法
   */
  static minus(a: number|string, b: number|string): number {
    if(typeof a === 'string')
      a = Number(a);
    if(typeof b === 'string')
      b = Number(b);
    return a - b;
  }
  /**
   * @name 乘法
   */
  static multiple(a: number|string, b: number|string): number {
    if(typeof a === 'string')
      a = Number(a);
    if(typeof b === 'string')
      b = Number(b);
    return a * b;
  }
  /** @name 除法 */
  static divide(a: number|string, b: number|string): number {
    if(typeof a === 'string')
      a = Number(a);
    if(typeof b === 'string')
      b = Number(b);
    return a / b;
  }
  /** @name 平方根 */
  static squareRoot(a: number|string) {
    if(typeof a === 'string')
      a = Number(a);
    return Math.sqrt(a);
  }
  /** @name 平方 */
  static square(a: number|string) {
    if(typeof a === 'string')
      a = Number(a);
    return Math.pow(a, 2);
  }
  /** @name 倒数 */
  static reciprocal(a: number|string) {
    if(typeof a === 'string')
      a = Number(a);
    return this.divide(1, a);
  }
  /** @name 取反 */
  static negate(a: number|string ) {
    if(typeof a === 'string')
      a = Number(a);
    return this.minus(0, a);
  }
}
