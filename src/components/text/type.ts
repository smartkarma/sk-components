import { ViewStyle } from 'react-native';
import { Fonts, Sizes } from '../../constants';
import { IPosition, IVariants } from '../../constants/general';

export interface TextProps extends IPosition, IVariants<Sizes.Types, Fonts.Family> {
  componentId?: string;
  color: string;
  colorHover: string;
  colorTint: string;
  disabled: boolean;
  hoverable?: boolean;
  onLongPress?: () => void;
  onPress?: () => void;
  style?: ViewStyle;
  tint?: boolean;
  weight: number;
}

export interface TextState {
  alignSelf: string;
  color: any;
  fontFamily: string;
  fontSize: number;
}
