export type SizeTypes = 'tiny' | 'mini' | 'small' | 'large' | 'huge' | 'massive'
export enum SizeTypesEnum {
  TINY = 'tiny',
  MINI = 'mini',
  SMALL = 'small',
  LARGE = 'large',
  HUGE = 'huge',
  MASSIVE = 'massive',
}

export const SizeTypesValue = {
  [SizeTypesEnum.TINY]: 11,
  [SizeTypesEnum.MINI]: 13,
  [SizeTypesEnum.SMALL]: 15,
  [SizeTypesEnum.LARGE]: 18,
  [SizeTypesEnum.HUGE]: 22,
  [SizeTypesEnum.MASSIVE]: 27,
};

export const IconSizeTypesValue = {
  [SizeTypesEnum.TINY]: 10,
  [SizeTypesEnum.MINI]: 15,
  [SizeTypesEnum.SMALL]: 20,
  [SizeTypesEnum.LARGE]: 30,
  [SizeTypesEnum.HUGE]: 40,
  [SizeTypesEnum.MASSIVE]: 50,
};
