import { Sizes } from '../../constants';

export interface Props {
  componentId?: string;
  color?: string;
  disabled?: boolean;
  onPress?: () => void;
  size?: Sizes.Types;
  text?: string;
  textColor?: string;
  type?: ButtonTypes;
}

export interface State {
}

export type ButtonTypes = 'normal' | 'compact' | 'fluid';

export enum ButtonTypesEnum {
  COMPACT = 'compact',
  FLUID = 'fluid',
  NORMAL = 'normal'
}
