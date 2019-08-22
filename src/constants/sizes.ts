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
  [SizeTypesEnum.TINY]: 12.57142864,
  [SizeTypesEnum.MINI]: 13.71428576,
  [SizeTypesEnum.SMALL]: 16,
  [SizeTypesEnum.LARGE]: 18.28571424,
  [SizeTypesEnum.HUGE]: 22.85714288,
  [SizeTypesEnum.MASSIVE]: 27.42857136,
};

export const IconSizeTypesValue = {
  [SizeTypesEnum.TINY]: 10,
  [SizeTypesEnum.MINI]: 15,
  [SizeTypesEnum.SMALL]: 20,
  [SizeTypesEnum.LARGE]: 30,
  [SizeTypesEnum.HUGE]: 40,
  [SizeTypesEnum.MASSIVE]: 50,
};
