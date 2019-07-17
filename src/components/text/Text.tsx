import React from 'react';
import { Animated } from 'react-native';
import { Colors, Sizes } from '../../constants';
import { HOVERING_DURATION } from '../../constants/numbers';
import * as Types from './type';

export default class Text extends React.Component<Types.Props, Types.State> {
  static defaultProps: Types.Props = {
    color: Colors.SECONDARY,
    colorHover: Colors.PRIMARY,
    colorTint: Colors.SECONDARY_TINT,
    disabled: false,
    hoverable: false,
    size: Sizes.TypesEnum.SMALL,
    tint: false
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

  getColor = () => this.props.tint ? this.props.colorTint : this.props.color;

  render() {
    const {
      children,
      color,
      colorHover,
      colorTint,
      disabled,
      hoverable,
      onPress,
      style,
      tint
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
          { color: disabled ? Colors.INACTIVE_GREY : hoverable ? hoveringColor : textColor },
          style
        ]}
      >
        {children}
      </Animated.Text>
    );
  }
}
