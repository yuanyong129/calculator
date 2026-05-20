import { bignumber, add, divide, multiply, subtract, sqrt, pow, format, evaluate } from "mathjs";
export class FMath {
  /**
   * 加法
   */
  static plus(a: number|string, b: number|string): string {
    return format(add(bignumber(a), bignumber(b)), { lowerExp: -12, upperExp: 12 });
  }
  /**
   * 减法
   */
  static minus(a: number|string, b: number|string): string {
    return format(subtract(bignumber(a), bignumber(b)), { lowerExp: -12, upperExp: 12 });
  }
  /**
   * 乘法
   */
  static multiple(a: number|string, b: number|string): string {
    return format(multiply(bignumber(a), bignumber(b)), { lowerExp: -12, upperExp: 12 });
  }
  /** 除法 */
  static divide(a: number|string, b: number|string): string {
    return format(divide(bignumber(a), bignumber(b)), { lowerExp: -12, upperExp: 12 });
  }
  /** 平方根 */
  static squareRoot(a: number|string): string {
    return format(sqrt(bignumber(a)), { lowerExp: -12, upperExp: 12 });
  }
  /** 平方 */
  static square(a: number|string): string {
    return format(pow(bignumber(a), 2), { lowerExp: -12, upperExp: 12 });
  }
  /** 倒数 */
  static reciprocal(a: number|string): string {
    return this.divide(1, a);
  }
  /** 取反 */
  static negate(a: number|string): string {
    return format(subtract(bignumber(0), bignumber(a)), { lowerExp: -12, upperExp: 12 });
  }
  /** 计算表达式 */
  static evaluate(expression: string): string {
    const normalized = expression
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/（/g, '(')
      .replace(/）/g, ')')
      .replace(/[^0-9.+\-*/()]/g, '');

    if (!normalized) {
      return '0';
    }

    try {
      const result = evaluate(normalized);
      return format(result, { lowerExp: -12, upperExp: 12 });
    } catch {
      return 'Error';
    }
  }
}
