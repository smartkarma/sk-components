import Color from 'color';
import { noop } from 'lodash-es';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Numbers, Sizes } from '../../constants';
import { LUMINOSITY } from '../../constants/numbers';
import Hoverable from '../hoverable';
import Text from '../text';
import Group from './Group';
import * as Types from './type';

class Button extends React.Component<Types.ButtonProps, Types.ButtonState> {
  static defaultProps: Types.ButtonProps = {
    centered: false,
    color: Colors.PRIMARY,
    disabled: false,
    fluid: false,
    hoverable: true,
    onPress: noop,
    rightAligned: false,
    size: Sizes.TypesEnum.SMALL,
    text: 'Press me!',
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
      style,
      text,
      textColor
    } = this.props;
    const backgroundColorAdvanced: any = Color(disabled ? Colors.INACTIVE_GREY : color);
    const isBackgroundLight = backgroundColorAdvanced.luminosity() >= LUMINOSITY;
    const textColorThemed = textColor ? textColor : isBackgroundLight ? Colors.GREY_GREY : Colors.WHITE;
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
                {
                  alignSelf,
                  backgroundColor: isHovered && hoverable ? backgroundColorAdvanced.darken(0.1) : backgroundColor,
                },
                style
              ]}
            >
              <Text centered color={textColorThemed}>{text}</Text>
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
    minWidth: 100,
    paddingHorizontal: 15,
    paddingVertical: 5
  }
});

export default Button;
