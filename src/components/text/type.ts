import { ViewStyle } from 'react-native';
import { Sizes } from '../../constants';

export interface Props {
  componentId?: string;
  color: string;
  colorHover: string;
  colorTint: string;
  disabled?: boolean;
  hoverable?: boolean;
  size?: Sizes.Types;
  style?: ViewStyle;
  tint?: boolean;
  onPress?: () => void;
}

export interface State {
}
