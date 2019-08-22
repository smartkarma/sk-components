import { ViewStyle } from 'react-native';
import { FontFamily } from '../../constants/fonts';
import { IPosition, IVariants } from '../../constants/general';
import { SizeTypes } from '../../constants/sizes';

export interface TitleProps extends IPosition, IVariants<SizeTypes, null, FontFamily> {
  style?: ViewStyle;
}

export interface TitleState {
}
