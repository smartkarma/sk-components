import React from 'react';
import { Animated } from 'react-native';
import { Colors } from '../../constants';
import { FontFamilyEnum, FontFamilyWeightEnum } from '../../constants/fonts';
import { HOVERING_DURATION } from '../../constants/numbers';
import { SizeTypesEnum, SizeTypesValue } from '../../constants/sizes';
import { onlyWeb } from '../../utils/helper';
import { getGeneralPosition } from '../../utils/position';
import { TextProps, TextState } from './type';

export default class Text extends React.Component<TextProps, TextState> {
  static defaultProps: TextProps = {
    centered: false,
    color: Colors.SECONDARY,
    colorHover: Colors.PRIMARY,
    colorTint: Colors.SECONDARY_TINT,
    disabled: false,
    family: FontFamilyEnum.ROBOTO,
    hoverable: false,
    onLongPress: undefined,
    onPress: undefined,
    rightAligned: false,
    size: SizeTypesEnum.SMALL,
    tint: false,
    type: null,
    weight: 400,
  };

  animHoveringColorValue = new Animated.Value(0);
  private rootComponent: any;

  constructor(props: TextProps) {
    super(props);
    const {
      color,
      colorHover,
      colorTint,
      centered,
      disabled,
      family,
      hoverable,
      rightAligned,
      size,
      tint,
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
      fontFamily: `${family}${FontFamilyWeightEnum[weight]}`,
      fontSize: SizeTypesValue[size],
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
