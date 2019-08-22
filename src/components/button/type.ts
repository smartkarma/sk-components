import { ViewStyle } from 'react-native';
import { IPosition, IVariants } from '../../constants/general';
import { SizeTypes } from '../../constants/sizes';

// Button
export interface ButtonProps extends IPosition, IVariants<SizeTypes, ButtonTypes, null> {
  componentId?: string;
  color?: string;
  disabled?: boolean;
  hoverable?: boolean | undefined;
  onPress?: () => void;
  onLongPress?: () => void;
  style?: any;
  text?: string;
  textColor?: string;
  textWeight?: number;
}

export interface ButtonState {
  alignSelf: string;
  backgroundColorClicked: string;
  backgroundColorHovered: string;
  backgroundColorThemed: string;
  textColorHovered: string;
  textColorThemed: string;
}

export type ButtonTypes = 'compact' | 'normal';
export type ButtonGroupTypes = 'horizontal' | 'vertical';

export const ButtonTypeValue = {
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
  NORMAL = 'normal'
}

export enum ButtonGroupTypesEnum {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal'
}

// ButtonGroup
export interface ButtonGroupProps {
  buttonType?: ButtonTypes;
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
