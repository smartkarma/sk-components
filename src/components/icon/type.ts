import { IPosition, IVariants } from '../../constants/general';
import { SizeTypes } from '../../constants/sizes';

export interface IconProps extends IPosition, IVariants<SizeTypes, IconTypes, IconFamily> {
  color: string;
  name: string;
  style?: any;
}

export interface IconState {
  CurrentIcon: any;
  alignSelf: string;
  iconSize: number;
}

export type IconTypes = 'circle' | 'normal' | 'square';

export enum IconTypesEnum {
  CIRCLE = 'circle',
  NORMAL = 'normal',
  SQUARE = 'square',
}

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

