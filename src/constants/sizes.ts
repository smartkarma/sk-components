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
