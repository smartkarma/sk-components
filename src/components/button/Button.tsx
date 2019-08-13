import Color from 'color';
import { noop } from 'lodash-es';
import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Colors, Sizes } from '../../constants';
import {
  BG_TO_DARKEN,
  BG_TO_DARKER,
  BG_TO_OPACITY,
  LUMINOSITY_LIGHT, TEXT_TO_DARKEN,
  TEXT_TO_DARKER, TEXT_TO_LIGHTEN,
  TEXT_TO_LIGHTER
} from '../../constants/numbers';
import { getGeneralPosition } from '../../utils/position';
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
    onLongPress: noop,
    onPress: noop,
    rightAligned: false,
    size: Sizes.TypesEnum.SMALL,
    text: 'Press me!',
    textWeight: 500,
    type: Types.ButtonTypesEnum.NORMAL
  };

  public static Types = Types.ButtonTypesEnum;
  public static Group = Group;

  constructor(props: Types.ButtonProps) {
    super(props);
    const {
      centered,
      color,
      disabled,
      fluid,
      rightAligned,
      textColor,
    } = props;

    // Color
    const backgroundColorAdvanced: any = new Color(color);
    const backgroundColorLuminosity = backgroundColorAdvanced.luminosity();
    const isBackgroundLight = backgroundColorLuminosity >= LUMINOSITY_LIGHT;
    const backgroundColorThemed: string = (disabled ? backgroundColorAdvanced.fade(BG_TO_OPACITY) : backgroundColorAdvanced).toString();
    const backgroundColorHovered: string = (backgroundColorAdvanced.darken(BG_TO_DARKER)).toString();
    const backgroundColorClicked: string = (backgroundColorAdvanced.darken(BG_TO_DARKEN)).toString();

    const textColorAdvanced: any = new Color(textColor ? textColor : isBackgroundLight ? Colors.SUBTLE_BLACK : Colors.WHITE);
    const textColorThemed: string = (isBackgroundLight
      ? textColorAdvanced.lighten(TEXT_TO_LIGHTER)
      : textColorAdvanced.darken(TEXT_TO_DARKER)).toString();
    const textColorHovered: string = (isBackgroundLight ? textColorAdvanced.darken(TEXT_TO_DARKEN) : textColorAdvanced.lighten(TEXT_TO_LIGHTEN)).toString();

    // Position
    const alignSelf: any = getGeneralPosition({centered, fluid, rightAligned});

    this.state = {
      alignSelf,
      backgroundColorClicked,
      backgroundColorHovered,
      backgroundColorThemed,
      textColorHovered,
      textColorThemed,
    }
  }

  render() {
    const {
      compact,
      disabled,
      hoverable,
      onLongPress,
      onPress,
      style,
      text,
      textWeight
    } = this.props;

    const {
      alignSelf,
      backgroundColorClicked,
      backgroundColorHovered,
      backgroundColorThemed,
      textColorHovered,
      textColorThemed,
    } = this.state;
    return (
      <Hoverable>
        {
          (isHovered: boolean, isPressing: boolean) => {
            return (
              <TouchableHighlight
                activeOpacity={1}
                underlayColor={hoverable ? backgroundColorClicked : backgroundColorHovered}
                disabled={disabled}
                onPress={onPress}
                onLongPress={onLongPress}
                style={[
                  styles.buttonContainer(compact ? ButtonTypesEnum.COMPACT : undefined),
                  {
                    alignSelf,
                    backgroundColor: isHovered && !disabled
                      ? isPressing ? backgroundColorClicked : hoverable ? backgroundColorHovered : backgroundColorThemed
                      : backgroundColorThemed
                  },
                  style
                ]}
              >
                <Text
                  centered weight={textWeight}
                  color={isHovered && !disabled ? textColorHovered : textColorThemed}
                >
                  {text}
                </Text>
              </TouchableHighlight>
            );
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
