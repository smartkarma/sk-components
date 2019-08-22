import React from 'react';
import { View } from 'react-native';
import { Colors, Sizes } from '../../constants';
import { Icons } from '../../constants';
import { getGeneralPosition } from '../../utils/position';
import * as Types from './type';

export default class Icon extends React.Component<Types.IconProps, Types.IconState> {
  static defaultProps: Types.IconProps = {
    centered: false,
    color: Colors.PRIMARY,
    fluid: false,
    name: 'diamond',
    rightAligned: false,
    size: 'small',
    type: Types.TypesEnum.FONT_AWESOME
  };

  constructor(props: Types.IconProps) {
    super(props);
    const {
      centered,
      fluid,
      rightAligned,
      size,
      type
    } = props;

    const CurrentIcon = Icons.Family[type];

    // Position
    const alignSelf: any = getGeneralPosition({ centered, fluid, rightAligned });
    const iconSize: number = Sizes.IconTypesValue[size];
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
