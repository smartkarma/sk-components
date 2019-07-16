import React from "react";
import { Animated, GestureResponderEvent } from "react-native";
import { PRIMARY, SECONDARY, SECONDARY_TINT } from "../../constants/colors";

export interface Props {
  componentId?: string;
  color: string;
  colorHover: string;
  colorTint: string;
  disabled: boolean;
  onPress: (e: GestureResponderEvent) => void
}

interface State {
}

export default class Text extends React.Component<Props, State> {
  static defaultProps = {
    color: SECONDARY,
    colorHover: PRIMARY,
    colorTint: SECONDARY_TINT,
    disabled: false,
    idEl: null,
    onPress: null
  };

  animHoveringColorValue = new Animated.Value(0);

  constructor(props: Props) {
    super(props);
  }

  onMouseEnter = () => {
    Animated.timing(this.animHoveringColorValue, {
      duration: 120,
      toValue: 1
    }).start();
  };

  onMouseLeave = () => {
    Animated.timing(this.animHoveringColorValue, {
      duration: 120,
      toValue: 0
    }).start();
  };

  render() {
    const {
      children,
      color,
      colorHover,
      colorTint,
      disabled,
      onPress
    } = this.props;
    const hoveringColor = this.animHoveringColorValue.interpolate({
      inputRange: [0, 1],
      outputRange: [disabled ? colorTint : color, colorHover]
    });
    return (
      <Animated.Text
        onPress={onPress}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        style={[
          {
            color: hoveringColor
          }
        ]}
      >
        {children}
      </Animated.Text>
    );
  }
}
