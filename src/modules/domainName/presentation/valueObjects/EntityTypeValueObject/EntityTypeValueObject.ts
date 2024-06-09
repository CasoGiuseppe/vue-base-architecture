import { CustomErrorClass } from "@/modules/core/presentation/exceptions/CustomErrorClass";
import { StringValueObject } from "@/modules/core/valueObjects/types/StringValueObject";

export class EntityTypeValueObject extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureValueIsCorrect(value)
  }

  private ensureValueIsCorrect(value: string): void {
    if(value !== 'test') throw new CustomErrorClass()
  }
}