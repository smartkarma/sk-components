import { ViewStyle } from 'react-native';
import { Fonts, Sizes } from '../../constants';

export interface Props {
  componentId?: string;
  color: string;
  colorHover: string;
  colorTint: string;
  disabled?: boolean;
  type?: Fonts.Family;
  hoverable?: boolean;
  size: Sizes.Types;
  style?: ViewStyle;
  tint?: boolean;
  weight: number;
  onPress?: () => void;
}

export interface State {
}
