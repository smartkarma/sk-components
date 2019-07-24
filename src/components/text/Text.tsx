import React from 'react';
import { Animated } from 'react-native';
import { Colors, Fonts, Sizes } from '../../constants';
import { HOVERING_DURATION } from '../../constants/numbers';
import * as Types from './type';

export default class Text extends React.Component<Types.Props, Types.State> {
  static defaultProps: Types.Props = {
    centered: false,
    color: Colors.SECONDARY,
    colorHover: Colors.PRIMARY,
    colorTint: Colors.SECONDARY_TINT,
    disabled: false,
    hoverable: false,
    rightAligned: false,
    size: Sizes.TypesEnum.SMALL,
    tint: false,
    type: Fonts.FamilyEnum.ROBOTO,
    weight: 400,
  };

  animHoveringColorValue = new Animated.Value(0);

  onMouseEnter = () => {
    Animated.timing(this.animHoveringColorValue, {
      duration: HOVERING_DURATION,
      toValue: 1
    }).start();
  };

  onMouseLeave = () => {
    Animated.timing(this.animHoveringColorValue, {
      duration: HOVERING_DURATION,
      toValue: 0
    }).start();
  };

  render() {
    const {
      centered,
      children,
      color,
      colorHover,
      colorTint,
      disabled,
      type,
      hoverable,
      onPress,
      rightAligned,
      size,
      style,
      tint,
      weight
    } = this.props;
    const textColor = tint ? colorTint : color;
    const hoveringColor = this.animHoveringColorValue.interpolate({
      inputRange: [0, 1],
      outputRange: [textColor, colorHover]
    });
    return (
      <Animated.Text
        onPress={onPress}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        style={[
          { alignSelf: centered ? 'center' : rightAligned ? 'flex-end' : 'flex-start'},
          { color: disabled ? Colors.INACTIVE_GREY : hoverable ? hoveringColor : textColor },
          { fontFamily: `${type}${Fonts.FamilyWeightEnum[weight]}` },
          { fontSize: Sizes.TypesValue[size] },
          style
        ]}
      >
        {children}
      </Animated.Text>
    );
  }
}
