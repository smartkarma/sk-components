import { ViewStyle } from 'react-native';
import { IPosition, IVariants } from '../../constants/general';
import { SizeTypes } from '../../constants/sizes';

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
export enum ButtonTypesEnum {
  COMPACT = 'compact',
  NORMAL = 'normal'
}
export const ButtonTypeValue = {
  [ButtonTypesEnum.COMPACT]: {
    buttonContainer: {
      minWidth: 0,
      paddingHorizontal: 10,
      paddingVertical: 5
    }
  },
  [ButtonTypesEnum.NORMAL]: {
    buttonContainer: {
      minWidth: 120,
      paddingHorizontal: 30,
      paddingVertical: 8
    }
  }
};

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

export type ButtonGroupTypes = 'horizontal' | 'vertical';
export enum ButtonGroupTypesEnum {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal'
}
