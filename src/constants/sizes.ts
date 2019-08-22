export type Types = 'tiny' | 'mini' | 'small' | 'large' | 'huge' | 'massive'
export enum TypesEnum {
  TINY = 'tiny',
  MINI = 'mini',
  SMALL = 'small',
  LARGE = 'large',
  HUGE = 'huge',
  MASSIVE = 'massive',
}

export const TypesValue = {
  [TypesEnum.TINY]: 12.57142864,
  [TypesEnum.MINI]: 13.71428576,
  [TypesEnum.SMALL]: 16,
  [TypesEnum.LARGE]: 18.28571424,
  [TypesEnum.HUGE]: 22.85714288,
  [TypesEnum.MASSIVE]: 27.42857136,
};

export const IconTypesValue = {
  [TypesEnum.TINY]: 10,
  [TypesEnum.MINI]: 15,
  [TypesEnum.SMALL]: 20,
  [TypesEnum.LARGE]: 30,
  [TypesEnum.HUGE]: 40,
  [TypesEnum.MASSIVE]: 50,
};
