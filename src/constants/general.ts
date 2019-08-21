export interface IPosition {
  centered?: boolean;
  fluid?: boolean | undefined;
  rightAligned?: boolean;
}

export interface IVariants<Size, Type> {
  size: Size;
  type: Type;
}
