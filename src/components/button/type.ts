import { ViewStyle } from 'react-native';
import { Sizes } from '../../constants';

// Button
export interface ButtonProps {
  centered?: boolean;
  componentId?: string;
  color?: string;
  disabled?: boolean;
  fluid: boolean | undefined;
  hoverable?: boolean | undefined;
  onPress?: () => void;
  rightAligned?: boolean;
  size?: Sizes.Types;
  style?: any;
  text?: string;
  textColor?: string;
  type?: ButtonTypes;
}

export interface ButtonState {
}

export type ButtonTypes = 'normal' | 'compact' | 'fluid';
export type ButtonGroupTypes = 'vertical' | 'horizontal';

export enum ButtonTypesEnum {
  COMPACT = 'compact',
  FLUID = 'fluid',
  NORMAL = 'normal'
}

export enum ButtonGroupTypesEnum {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal'
}

// ButtonGroup
export interface ButtonGroupProps {
  centered?: boolean;
  children?: any;
  componentId?: string;
  fluid?: boolean;
  hoverable?: boolean;
  style?: ViewStyle;
  type?: ButtonGroupTypes;
}

export interface ButtonGroupState {
}
