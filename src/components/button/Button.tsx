import Color from 'color';
import { noop } from 'lodash-es';
import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Colors, Numbers, Sizes } from '../../constants';
import {
  BG_TO_DARKEN,
  BG_TO_DARKER,
  BG_TO_OPACITY,
  LUMINOSITY_LIGHT,
  TEXT_TO_DARKEN,
  TEXT_TO_LIGHTEN
} from '../../constants/numbers';
import Hoverable from '../hoverable';
import Text from '../text';
import Group from './Group';
import * as Types from './type';
import { ButtonTypesEnum, ButtonTypeValue } from './type';

class Button extends React.Component<Types.ButtonProps, Types.ButtonState> {
  static defaultProps: Types.ButtonProps = {
    centered: false,
    color: Colors.PRIMARY,
    compact: false,
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
      compact,
      disabled,
      fluid,
      hoverable,
      onPress,
      rightAligned,
      style,
      text,
      textColor
    } = this.props;

    // Color
    const backgroundColorAdvanced: any = Color(color);
    const backgroundColorLuminosity = backgroundColorAdvanced.luminosity();
    const isBackgroundLight =  backgroundColorLuminosity >= LUMINOSITY_LIGHT;
    const backgroundColorThemed: string = disabled ? backgroundColorAdvanced.fade(BG_TO_OPACITY) : backgroundColorAdvanced.string();
    const backgroundColorHovered: string = backgroundColorAdvanced.darken(BG_TO_DARKER);
    const backgroundColorClicked: string = backgroundColorAdvanced.darken(BG_TO_DARKEN);
    const textColorAdvanced: any = Color(textColor ? textColor : isBackgroundLight ? Colors.GREY_GREY : Colors.WHITE);
    const textColorThemed: string = disabled
      ? isBackgroundLight
        ? textColorAdvanced.lighten(TEXT_TO_LIGHTEN) : textColorAdvanced.darken(TEXT_TO_DARKEN)
      : textColorAdvanced.string();

    // Position
    const alignSelf: any = centered ? 'center' : rightAligned ? 'flex-end' : fluid ? undefined : 'flex-start';
    return (
      <Hoverable>
        {
          (isHovered: boolean) => {
            return (
              <TouchableHighlight
                activeOpacity={Numbers.TOUCH_OPACITY}
                underlayColor={backgroundColorClicked}
                disabled={disabled}
                onPress={onPress}
                style={[
                  styles.buttonContainer(compact ? ButtonTypesEnum.COMPACT : undefined),
                  {
                    alignSelf,
                    backgroundColor: isHovered && hoverable && !disabled
                      ? backgroundColorHovered
                      : backgroundColorThemed,
                  },
                  style
                ]}
              >
                <Text centered color={textColorThemed}>{text}</Text>
              </TouchableHighlight>
            )
          }
        }
      </Hoverable>
    );
  }
}

const styles = {
  buttonContainer: (type: Types.ButtonTypesEnum = ButtonTypesEnum.NORMAL) => ({
    borderRadius: 3,
    margin: 5,
    ...ButtonTypeValue[type].buttonContainer
  })
};

export default Button;
