import { ViewStyle } from 'react-native';
import { Fonts, Sizes } from '../../constants';

export interface Props {
  centered?: boolean;
  componentId?: string;
  color: string;
  colorHover: string;
  colorTint: string;
  disabled?: boolean;
  type?: Fonts.Family;
  hoverable?: boolean;
  rightAligned?: boolean;
  size: Sizes.Types;
  style?: ViewStyle;
  tint?: boolean;
  weight: number;
  onPress?: () => void;
}

export interface State {
  alignSelf: string;
  color: any;
  fontFamily: string;
  fontSize: number;
}
