import { IDiscount } from "../interfaces/IDiscount";

export class StudentDiscount implements IDiscount {
  calculate(): number {
    return 15;
  }
}