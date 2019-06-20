export enum Type {
  INSTANT, PERMANENT, TEMPORARY
}

export enum Category {
  FRIENDLY, FAMILY, HARDCORE
}

export interface Gage {
  type: Type;
  category: Category;
  desc: string;
}
