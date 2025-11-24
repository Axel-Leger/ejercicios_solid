import { IDiscount } from "../interfaces/IDiscount";

export class DiscountContext {
  private discount: IDiscount;
  constructor(discount: IDiscount) {
    this.discount = discount;
  }

  getDiscount(): number {
    return this.discount.calculate();
  }
}