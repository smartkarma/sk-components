export interface IPosition {
  centered?: boolean;
  fluid?: boolean | undefined;
  rightAligned?: boolean;
}

export interface IVariants<Size, Type, Family> {
  size: Size;
  type: Type;
  family: Family;
}

