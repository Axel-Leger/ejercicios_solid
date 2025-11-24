import { IDiscount } from "../interfaces/IDiscount";

export class RegularDiscount implements IDiscount {
  calculate(): number {
    return 10;
  }
}