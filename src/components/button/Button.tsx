import Color from 'color';
import { noop } from 'lodash-es';
import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Colors } from '../../constants';
import {
  BG_TO_DARKEN,
  BG_TO_DARKER,
  BG_TO_OPACITY,
  LUMINOSITY_LIGHT, TEXT_TO_DARKEN,
  TEXT_TO_LIGHTEN,
  TEXT_TO_LIGHTER
} from '../../constants/numbers';
import { SizeTypesEnum } from '../../constants/sizes';
import { getGeneralPosition } from '../../utils/position';
import Hoverable from '../hoverable';
import Text from '../text';
import Group from './Group';
import { ButtonProps, ButtonState, ButtonTypes, ButtonTypesEnum, ButtonTypeValue } from './type';

class Button extends React.Component<ButtonProps, ButtonState> {
  static defaultProps: ButtonProps = {
    centered: false,
    color: Colors.PRIMARY,
    disabled: false,
    family: null,
    fluid: false,
    hoverable: true,
    onLongPress: noop,
    onPress: noop,
    rightAligned: false,
    size: SizeTypesEnum.SMALL,
    text: 'Press me!',
    textWeight: 500,
    type: ButtonTypesEnum.NORMAL
  };

  public static Types = ButtonTypesEnum;
  public static Group = Group;

  constructor(props: ButtonProps) {
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
      : textColorAdvanced).toString();
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
      disabled,
      hoverable,
      onLongPress,
      onPress,
      style,
      text,
      textWeight,
      type,
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
                  styles.buttonContainer(type),
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
  buttonContainer: (type: ButtonTypes = ButtonTypesEnum.NORMAL) => ({
    borderRadius: 3,
    margin: 5,
    ...ButtonTypeValue[type].buttonContainer
  })
};

export default Button;
