import { Entity } from "@/modules/core/guards/Entity";
import type { IDomainEntityName } from "./entity";

export class DomainName extends Entity<IDomainEntityName>{
  public static createDomainName (props: IDomainEntityName){}
}