import { IPosition, IVariants } from '../../constants/general';
import { SizeTypes } from '../../constants/sizes';

export interface LabelProps extends IPosition, IVariants<SizeTypes, LabelTypes, null> {
  style?: any;
}

export interface LabelState {
  alignSelf: string;
}

export type LabelTypes = 'basic' | 'normal' | 'plain'
export enum LabelTypesEnum {
  BASIC = 'basic',
  NORMAL = 'normal',
  PLAIN = 'plain'
}
export const LabelTypeValue = {
  [LabelTypesEnum.BASIC]: {
    container: {
      borderRadius: 10,
      borderWidth: 1,
      paddingHorizontal: 15,
      paddingVertical: 2,
    }
  },
  [LabelTypesEnum.NORMAL]: {
    container: {
      borderColor: 'transparent',
      borderWidth: 1,
      paddingHorizontal: 15,
      paddingVertical: 2,
    }
  },
  [LabelTypesEnum.PLAIN]: {
    container: {
      borderColor: 'transparent',
      borderWidth: 1,
      paddingVertical: 2,
    }
  }
};
