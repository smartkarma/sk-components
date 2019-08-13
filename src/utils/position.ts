interface PositionOptions {
  centered?: boolean;
  rightAligned?: boolean;
  fluid?: boolean
}

export const getGeneralPosition = (options: PositionOptions): any => {
  const {
    centered,
    fluid,
    rightAligned
  } = options;
  return centered ? 'center' : rightAligned ? 'flex-end' : fluid ? undefined : 'flex-start';
};
