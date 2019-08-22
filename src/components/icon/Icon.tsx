import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../constants';
import { Icons } from '../../constants';
import { IconSizeTypesValue } from '../../constants/sizes';
import { getGeneralPosition } from '../../utils/position';
import { IconFamilyEnum, IconProps, IconState, IconTypes, IconTypesEnum, IconTypeValue } from './type';

export default class Icon extends React.Component<IconProps, IconState> {
  static defaultProps: IconProps = {
    backgroundColor: Colors.SUBTLE_BLACK,
    centered: false,
    color: Colors.PRIMARY,
    family: IconFamilyEnum.FONT_AWESOME,
    fluid: false,
    name: 'diamond',
    rightAligned: false,
    size: 'small',
    type: IconTypesEnum.NORMAL
  };

  public static Family = IconFamilyEnum;
  public static Types = IconTypesEnum;

  constructor(props: IconProps) {
    super(props);
    const {
      centered,
      fluid,
      rightAligned,
      size,
      family
    } = props;

    const CurrentIcon = Icons.Family[family];

    // Position
    const alignSelf: any = getGeneralPosition({ centered, fluid, rightAligned });
    const iconSize: number = IconSizeTypesValue[size];

    this.state = {
      CurrentIcon,
      alignSelf,
      iconSize
    };
  }

  render() {
    const {
      backgroundColor,
      color,
      name,
      style,
      type,
    } = this.props;
    const {
      CurrentIcon,
      alignSelf,
      iconSize,
    } = this.state;

    return (
      <View
        style={[
          styles.container(type, iconSize, backgroundColor),
          {
            alignSelf
          },
          style
        ]}
      >
        <CurrentIcon name={name} size={iconSize} color={color}/>
      </View>
    );
  }
}

const styles = {
  container: (type: IconTypes, size: number, color: string) => ({
    ...IconTypeValue[type].container(size, color),
  })
};
