import { merge } from 'lodash-es';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  ButtonGroupProps, ButtonGroupState, ButtonGroupTypesEnum,
  ButtonProps
} from './type';

export default class Group extends React.Component<ButtonGroupProps, ButtonGroupState> {
  static defaultProps: ButtonGroupProps = {
    type: ButtonGroupTypesEnum.VERTICAL
  };

  public static Types = ButtonGroupTypesEnum;

  render() {
    const {
      buttonType,
      centered,
      type,
      fluid,
      rightAligned,
      children
    } = this.props;

    const isHorizontal = type === ButtonGroupTypesEnum.HORIZONTAL;
    return (
      <View style={[
        styles.buttonGroupContainer,
        isHorizontal && styles.buttonGroupHorizontal,
        {
          justifyContent: centered ? 'center' : rightAligned ? 'flex-end' : undefined
        }
      ]}>
        {
          React.Children.map(children, (child: React.ReactElement<ButtonProps>, i) => {
            const marginTop = type === ButtonGroupTypesEnum.HORIZONTAL ? undefined : i !== 0 ? 0 : undefined;
            const marginLeft = type === ButtonGroupTypesEnum.HORIZONTAL && i !== 0 ? 0 : undefined;
            const groupProps = {...this.props, type: buttonType};
            const childProps = {...child.props};
            return (
              React.cloneElement(child, {
                ...merge(childProps, groupProps),
                centered: type === ButtonGroupTypesEnum.HORIZONTAL || centered,
                style: {
                  flexGrow: fluid ? 1 : 0,
                  marginLeft,
                  marginTop,
                }
              })
            );
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonGroupContainer: {
    margin: 0,
  },
  buttonGroupHorizontal: {
    flexDirection: 'row'
  }
});
