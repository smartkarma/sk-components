import Color from 'color';
import { noop } from 'lodash-es';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Numbers, Sizes } from '../../constants';
import Hoverable from '../hoverable';
import Text from '../text';
import Group from './Group';
import * as Types from './type';

class Button extends React.Component<Types.ButtonProps, Types.ButtonState> {
  static defaultProps: Types.ButtonProps = {
    centered: false,
    color: Colors.JADE,
    disabled: false,
    fluid: false,
    hoverable: false,
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
      fluid,
      hoverable,
      onPress,
      rightAligned,
      text,
      textColor
    } = this.props;
    const backgroundColorAdvanced: any = Color(disabled ? Colors.INACTIVE_GREY : color);
    const backgroundColor: any = backgroundColorAdvanced.string();
    const alignSelf: any = centered ? 'center' : rightAligned ? 'flex-end' : fluid ? undefined : 'flex-start';
    return (
      <Hoverable>
        {
          (isHovered: boolean) => (
            <TouchableOpacity
              activeOpacity={Numbers.TOUCH_OPACITY}
              disabled={disabled}
              onPress={onPress}
              style={[
                styles.buttonContainer,
                { backgroundColor: isHovered && hoverable ? backgroundColorAdvanced.darken(0.1) : backgroundColor, alignSelf }
              ]}
            >
              <Text centered color={textColor}>{text}</Text>
            </TouchableOpacity>
          )
        }
      </Hoverable>
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

export default Button
