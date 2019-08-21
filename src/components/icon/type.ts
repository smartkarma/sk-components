import { Sizes } from '../../constants';
import { IPosition, IVariants } from '../../constants/general';

export interface Props extends IPosition, IVariants<Sizes.Types, TypesEnum> {
  color: string;
  style?: any;
}

export interface State {
  alignSelf: string;
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

