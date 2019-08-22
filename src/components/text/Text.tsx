import React from 'react';
import { Animated } from 'react-native';
import { Colors, Fonts, Sizes } from '../../constants';
import { HOVERING_DURATION } from '../../constants/numbers';
import { onlyWeb } from '../../utils/helper';
import { getGeneralPosition } from '../../utils/position';
import * as Types from './type';

export default class Text extends React.Component<Types.TextProps, Types.TextState> {
  static defaultProps: Types.TextProps = {
    centered: false,
    color: Colors.SECONDARY,
    colorHover: Colors.PRIMARY,
    colorTint: Colors.SECONDARY_TINT,
    disabled: false,
    hoverable: false,
    onLongPress: undefined,
    onPress: undefined,
    rightAligned: false,
    size: Sizes.TypesEnum.SMALL,
    tint: false,
    type: Fonts.FamilyEnum.ROBOTO,
    weight: 400,
  };

  animHoveringColorValue = new Animated.Value(0);
  private rootComponent: any;

  constructor(props: Types.TextProps) {
    super(props);
    const {
      color,
      colorHover,
      colorTint,
      centered,
      disabled,
      hoverable,
      rightAligned,
      size,
      tint,
      type,
      weight,
    } = props;
    const textColor = tint ? colorTint : color;
    const hoveringColor = this.animHoveringColorValue.interpolate({
      inputRange: [0, 1],
      outputRange: [textColor, colorHover]
    });

    this.state = {
      alignSelf: getGeneralPosition({centered, rightAligned}),
      color: disabled ? Colors.INACTIVE_GREY : hoverable ? hoveringColor : textColor,
      fontFamily: `${type}${Fonts.FamilyWeightEnum[weight]}`,
      fontSize: Sizes.TypesValue[size],
    }
  }

  setNativeProps(nativeProps) {
    this.rootComponent.setNativeProps(nativeProps)
  }

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
      children,
      onLongPress,
      onPress,
      style,
    } = this.props;

    const {
      alignSelf,
      color,
      fontFamily,
      fontSize
    } = this.state;

    return (
      <Animated.Text
        ref={(ref) => this.rootComponent = ref}
        onMouseEnter={onlyWeb(this.onMouseEnter)}
        onMouseLeave={onlyWeb(this.onMouseLeave)}
        onPress={onPress}
        onLongPress={onLongPress}
        style={[
          { alignSelf },
          { color },
          { fontFamily },
          { fontSize },
          style
        ]}
      >
        {children}
      </Animated.Text>
    );
  }
}
