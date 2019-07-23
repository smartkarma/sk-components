import React from 'react';
import { ViewStyle } from 'react-native';
import { Sizes } from '../../constants';

// Button
export interface ButtonProps {
  centered?: boolean;
  componentId?: string;
  color?: string;
  disabled?: boolean;
  onPress?: () => void;
  size?: Sizes.Types;
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
  componentId?: string;
  type?: ButtonGroupTypes;
  children?: React.ReactNode;
  style?: ViewStyle;
}

export interface ButtonGroupState {
}
