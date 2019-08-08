import { merge } from 'lodash-es';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonProps } from './type';
import * as Types from './type';

export default class Group extends React.Component<Types.ButtonGroupProps, Types.ButtonGroupState> {
  static defaultProps: Types.ButtonGroupProps = {
    type: Types.ButtonGroupTypesEnum.VERTICAL
  };

  public static Types = Types.ButtonGroupTypesEnum;

  render() {
    const {
      centered,
      type,
      fluid,
      rightAligned,
      children
    } = this.props;

    const isHorizontal = type === Types.ButtonGroupTypesEnum.HORIZONTAL;
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
            const marginTop = type === Types.ButtonGroupTypesEnum.HORIZONTAL ? undefined : i !== 0 ? 0 : undefined;
            const marginLeft = type === Types.ButtonGroupTypesEnum.HORIZONTAL && i !== 0 ? 0 : undefined;
            const groupProps = {...this.props};
            const childProps = {...child.props};
            return (
              React.cloneElement(child, {
                ...merge(childProps, groupProps),
                centered: type === Types.ButtonGroupTypesEnum.HORIZONTAL || centered,
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
