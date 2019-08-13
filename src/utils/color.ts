import Color from 'color';
import { PRIMARY } from '../constants/colors';
import {
  BG_TO_DARKEN,
  BG_TO_DARKER,
  BG_TO_LIGHTER,
  TEXT_TO_DARKEN,
  TEXT_TO_DARKER,
  TEXT_TO_LIGHTEN,
  TEXT_TO_LIGHTER,
  TOUCH_OPACITY
} from '../constants/numbers';

interface AdvancedColor {
  darken?: string;
  darker?: string;
  lighten?: string;
  lighter?: string;
  originalColor?: string;
}

interface AdvancedColorOptions {
  disabled?: boolean;
  type?: 'text' | 'bg';
}

const advancedColorTypes = {
  'bg': {
    toDarken: BG_TO_DARKEN,
    toDarker: BG_TO_DARKER,
    toLighten: BG_TO_LIGHTER,
    toLighter: BG_TO_LIGHTER,
    toOpacity: TOUCH_OPACITY
  },
  'text': {
    toDarken: TEXT_TO_DARKEN,
    toDarker: TEXT_TO_DARKER,
    toLighten: TEXT_TO_LIGHTEN,
    toLighter: TEXT_TO_LIGHTER,
    toOpacity: TOUCH_OPACITY
  }
};

export const generateColor = (originalColor: string = PRIMARY, options: AdvancedColorOptions): AdvancedColor => {
  const ColorSetting: any = new Color(originalColor);
  const ColorType: any = advancedColorTypes[options.type || 'bg'];
  return {
    darken: ColorSetting.darken(ColorType.toDarken),
    darker: ColorSetting.darken(ColorType.toDarker),
    lighten: ColorSetting.lighten(ColorType.toLighten),
    lighter: ColorSetting.lighten(ColorType.toLighter),
    originalColor,
  }
};
