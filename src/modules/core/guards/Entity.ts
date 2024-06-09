import { UniqueEntityID } from "./valueObjects/UniqueEntityID";

const isEntity = (role: any): role is Entity<any> => role instanceof Entity;

export abstract class Entity<T> {
  protected readonly _id: UniqueEntityID;
  protected props: T;

  constructor(props: T, id?: UniqueEntityID) {
    this._id = id ?? new UniqueEntityID();
    this.props = props;
  }

  public equals(collection: Entity<T>): boolean {
    if(collection === null || collection === undefined) return false;
    if(this === collection) return true;

    if(!isEntity(collection)) return false;

    return this._id.equals(collection._id)
  }
}