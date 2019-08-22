import { Sizes } from '../../constants';
import { IPosition, IVariants } from '../../constants/general';

export interface IconProps extends IPosition, IVariants<Sizes.Types, TypesEnum> {
  color: string;
  name: string;
  style?: any;
}

export interface IconState {
  CurrentIcon: any;
  alignSelf: string;
  iconSize: number;
}

export enum TypesEnum {
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

