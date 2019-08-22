import { IPosition, IVariants } from '../../constants/general';
import { SizeTypes } from '../../constants/sizes';

export interface IconProps extends IPosition, IVariants<SizeTypes, IconTypes, IconFamily> {
  backgroundColor: string;
  color: string;
  name: string;
  style?: any;
}

export interface IconState {
  CurrentIcon: any;
  alignSelf: string;
  iconSize: number;
}

export type IconTypes = 'normal' | 'square';

export enum IconTypesEnum {
  NORMAL = 'normal',
  SQUARE = 'square',
}

export const IconTypeValue = {
  [IconTypesEnum.NORMAL]: {
    container: () => ({})
  },
  [IconTypesEnum.SQUARE]: {
    container: (size: number, color: string) => ({
      backgroundColor: color,
      borderRadius: 4,
      paddingHorizontal: size / 2.2,
      paddingVertical: size / 2,
    })
  }
};

export type IconFamily =
  'AntDesign' | 'Entypo' |
  'EvilIcons' | 'Feather' |
  'FontAwesome' | 'Foundation' |
  'Ionicons' | 'MaterialIcons' |
  'MaterialCommunityIcons' | 'Octicons' |
  'Zocial' | 'SimpleLineIcons'

export enum IconFamilyEnum {
  ANT_DESIGN = 'AntDesign',
  ENTYPO = 'Entypo',
  EVIL_ICONS = 'EvilIcons',
  FEATHER = 'Feather',
  FONT_AWESOME = 'FontAwesome',
  FOUNDATION = 'Foundation',
  IONICONS = 'Ionicons',
  MATERIAL_ICONS = 'MaterialIcons',
  MATERIAL_COMMUNITY_ICONS = 'MaterialCommunityIcons',
  OCTICONS = 'Octicons',
  ZOCIAL = 'Zocial',
  SIMPLE_LINE_ICONS = 'SimpleLineIcons'
}

