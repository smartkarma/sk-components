import React from 'react';
import { View } from 'react-native';
import { Colors, Sizes } from '../../constants';
import { Icons } from '../../constants';
import { getGeneralPosition } from '../../utils/position';
import { IconFamilyEnum, IconProps, IconState, IconTypesEnum } from './type';

export default class Icon extends React.Component<IconProps, IconState> {
  static defaultProps: IconProps = {
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
    const iconSize: number = Sizes.IconSizeTypesValue[size];
    this.state = {
      CurrentIcon,
      alignSelf,
      iconSize
    };
  }

  render() {
    const {
      color,
      name,
      style,
    } = this.props;
    const {
      CurrentIcon,
      alignSelf,
      iconSize,
    } = this.state;

    return (
      <View
        style={[
          styles.iconContainer,
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
  iconContainer: {}
};
