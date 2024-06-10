import { DataTypeIsDenied } from "../../../presentation/exceptions/DataTypeIsDenied";

export type PrimitivesTypes = string | number | boolean | Date;
type Optional<T> = T | undefined | null;

export abstract class ValueObject<T extends PrimitivesTypes> {
  readonly value: T;

  constructor(value: T) {
    this.value = value;
  }

  toString(): string {
    return this.value.toString();
  }

  private ensureValueIsDefined(value: Optional<T>): void {
    if (value === undefined || value === null) new DataTypeIsDenied(typeof value);
  }
}