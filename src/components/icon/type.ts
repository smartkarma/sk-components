import { ViewStyle } from 'react-native';
import { Sizes } from '../../constants';

export interface Props {
  color: string;
  size: Sizes.Types;
  style?: ViewStyle;
  type: TypesEnum;
}

export interface State {
}

export enum TypesEnum {
  ANT_DESIGN = 'AntDesign',
  ENTYPO = 'Entypo',
  EVIL_ICONS = 'EvilIcons',
  FEATHER = 'Feather',
  FONT_AWESOME = 'FontAwesome',
  FONT_AWESOME_5 = 'FontAwesome5',
  FOUNDATION = 'Foundation',
  IONICONS = 'Ionicons',
  MATERIAL_ICONS = 'MaterialIcons',
  MATERIAL_COMMUNITY_ICONS = 'MaterialCommunityIcons',
  OCTICONS = 'Octicons',
  ZOCIAL = 'Zocial',
  SIMPLE_LINE_ICONS = 'SimpleLineIcons'
}

