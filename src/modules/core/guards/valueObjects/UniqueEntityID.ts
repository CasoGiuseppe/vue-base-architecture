import { UUID } from "../../providers/Uuid-v4/Uuid";

export class UniqueEntityID {
  private id: UniqueEntityID;

  constructor(id?: any) {
    this.id = id ?? UUID.generate()
  }

  public equals(id: UniqueEntityID):boolean {
    return this.id === id
  }
}