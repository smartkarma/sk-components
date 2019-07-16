import React from 'react';
import {Animated, GestureResponderEvent} from 'react-native';
import {PRIMARY, SECONDARY, SECONDARY_TINT} from '../../constants/colors';

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

class Text extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  animHoveringColorValue = new Animated.Value(0);

  static defaultProps = {
    color: SECONDARY,
    colorHover: PRIMARY,
    colorTint: SECONDARY_TINT,
    disabled: false,
    idEl: null,
    onPress: null
  };

  _onMouseEnter = () => {
    Animated.timing(this.animHoveringColorValue, {
      toValue: 1,
      duration: 120
    }).start();
  };

  _onMouseLeave = () => {
    Animated.timing(this.animHoveringColorValue, {
      toValue: 0,
      duration: 120
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
          onMouseEnter={this._onMouseEnter}
          onMouseLeave={this._onMouseLeave}
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

export default Text;
