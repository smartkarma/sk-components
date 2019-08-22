// @ts-ignore
import PTSerifBold from '../assets/fonts/PTSerif-Bold.ttf';
// @ts-ignore
import PTSerifRegular from '../assets/fonts/PTSerif-Regular.ttf';
// @ts-ignore
import RobotoBlack from '../assets/fonts/Roboto-Black.ttf';
// @ts-ignore
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';
// @ts-ignore
import RobotoLight from '../assets/fonts/Roboto-Light.ttf';
// @ts-ignore
import RobotoMedium from '../assets/fonts/Roboto-Medium.ttf';
// @ts-ignore
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';
// @ts-ignore
import RobotoThin from '../assets/fonts/Roboto-Thin.ttf';

export type FontFamily = 'PTSerif' | 'Roboto'
export enum FontFamilyEnum {
  PT_SERIF = 'PTSerif',
  ROBOTO = 'Roboto'
}

export type FontFamilyWeight = 'Thin' | 'Light' | 'Regular' | 'Medium' | 'Bold' | 'Black'
export const FontFamilyWeightEnum = {
  100: 'Thin',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  700: 'Bold',
  900: 'Black',
};

export type FontFamilyTypes = 'PTSerifRegular' | 'PTSerifBold' | 'RobotoThin' | 'RobotoLight' | 'RobotoRegular' | 'RobotoMedium' | 'RobotoBold' | 'RobotoBlack'

export const Fonts = {
  'PTSerifBold': require('../assets/fonts/PTSerif-Bold.ttf'),
  'PTSerifRegular': require('../assets/fonts/PTSerif-Regular.ttf'),
  'RobotoBlack': require('../assets/fonts/Roboto-Black.ttf'),
  'RobotoBold': require('../assets/fonts/Roboto-Bold.ttf'),
  'RobotoLight': require('../assets/fonts/Roboto-Light.ttf'),
  'RobotoMedium': require('../assets/fonts/Roboto-Medium.ttf'),
  'RobotoRegular': require('../assets/fonts/Roboto-Regular.ttf'),
  'RobotoThin': require('../assets/fonts/Roboto-Thin.ttf'),
};
