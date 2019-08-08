import { ViewStyle } from 'react-native';
import { Sizes } from '../../constants';

// Button
export interface ButtonProps {
  centered?: boolean;
  compact?: boolean;
  componentId?: string;
  color?: string;
  disabled?: boolean;
  fluid: boolean | undefined;
  hoverable?: boolean | undefined;
  onPress?: () => void;
  onLongPress?: () => void;
  rightAligned?: boolean;
  size?: Sizes.Types;
  style?: any;
  text?: string;
  textColor?: string;
  textWeight?: number;
  type?: ButtonTypes;
}

export interface ButtonState {
}

export type ButtonTypes = 'normal' | 'compact' | 'fluid' | 'basic';
export type ButtonGroupTypes = 'vertical' | 'horizontal';

export const ButtonTypeValue = {
  basic: {
    buttonContainer: {

    }
  },
  compact: {
    buttonContainer: {
      minWidth: 0,
      paddingHorizontal: 10,
      paddingVertical: 5
    }
  },
  normal: {
    buttonContainer: {
      minWidth: 120,
      paddingHorizontal: 30,
      paddingVertical: 8
    }
  }
};

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
  compact?: boolean;
  componentId?: string;
  fluid?: boolean;
  hoverable?: boolean;
  rightAligned?: boolean;
  style?: ViewStyle;
  type?: ButtonGroupTypes;
}

export interface ButtonGroupState {
}
