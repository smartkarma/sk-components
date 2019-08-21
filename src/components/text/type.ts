import { ViewStyle } from 'react-native';
import { Fonts, Sizes } from '../../constants';
import { IPosition, IVariants } from '../../constants/general';

export interface TextProps extends IPosition, IVariants<Sizes.Types, Fonts.Family> {
  componentId?: string;
  color: string;
  colorHover: string;
  colorTint: string;
  disabled?: boolean;
  hoverable?: boolean;
  style?: ViewStyle;
  tint?: boolean;
  weight: number;
  onPress?: () => void;
}

export interface TextState {
  alignSelf: string;
  color: any;
  fontFamily: string;
  fontSize: number;
}
