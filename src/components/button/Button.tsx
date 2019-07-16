import React from 'react';
import {noop} from 'lodash-es';
import {Text, StyleSheet, TouchableOpacity, GestureResponderEvent} from 'react-native';
import {GREY_GREY, INACTIVE_GREY, JADE, WHITE} from '../../constants/colors';
import {TOUCH_OPACITY} from '../../constants/numbers';

export interface Props {
  componentId?: string;
  active: boolean;
  bordered: boolean;
  disabled: boolean;
  onPress: (event: GestureResponderEvent) => void;
  shadowed: boolean;
  title: string;
}

interface State {
}

class Button extends React.Component<Props, State> {
  static defaultProps: Props = {
    title: 'Press me!',
    onPress: noop,
    disabled: false,
    active: false,
    bordered: false,
    shadowed: false
  };

  render() {
    const {
      active,
      disabled,
      onPress,
      title
    } = this.props;
    return (
       <TouchableOpacity
          activeOpacity={TOUCH_OPACITY}
          disabled={disabled}
          onPress={onPress}
          style={[
            styles.container,
            {backgroundColor: disabled ? INACTIVE_GREY : active ? JADE : GREY_GREY}
          ]}
       >
         <Text style={{color: WHITE}}>{title}</Text>
       </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    padding: 5,
    margin: 5
  }
});

export default Button;
