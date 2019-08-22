import { ViewStyle } from 'react-native';
import { FontFamily } from '../../constants/fonts';
import { IPosition, IVariants } from '../../constants/general';
import { SizeTypes } from '../../constants/sizes';

export interface TextProps extends IPosition, IVariants<SizeTypes, null, FontFamily> {
  componentId?: string;
  color: string;
  colorHover?: string;
  disabled: boolean;
  hoverable?: boolean;
  lineHeight?: number;
  numberOfLines?: number;
  onLongPress?: () => void;
  onPress?: () => void;
  style?: ViewStyle;
  weight: number;
}

export interface TextState {
  alignSelf: string;
  color: any;
  fontFamily: string;
  fontSize: number;
}
