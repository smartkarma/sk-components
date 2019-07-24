import { noop } from 'lodash-es';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Numbers, Sizes } from '../../constants';
import Text from '../text';
import Group from './Group';
import * as Types from './type';

export default class Button extends React.Component<Types.ButtonProps, Types.ButtonState> {
  static defaultProps: Types.ButtonProps = {
    basic: false,
    centered: false,
    color: Colors.JADE,
    disabled: false,
    onPress: noop,
    rightAligned: false,
    size: Sizes.TypesEnum.SMALL,
    text: 'Press me!',
    textColor: Colors.WHITE,
    type: Types.ButtonTypesEnum.NORMAL
  };

  public static Types = Types.ButtonTypesEnum;
  public static Group = Group;

  render() {
    const {
      centered,
      color,
      disabled,
      onPress,
      rightAligned,
      text,
      textColor
    } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={Numbers.TOUCH_OPACITY}
        disabled={disabled}
        onPress={onPress}
        style={[
          styles.buttonContainer,
          { backgroundColor: disabled ? Colors.INACTIVE_GREY : color },
          { alignSelf: centered ? 'center' : rightAligned ? 'flex-end' : 'flex-start' }
        ]}
      >
        <Text color={textColor}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 2,
    margin: 5,
    paddingHorizontal: 15,
    paddingVertical: 5
  }
});
