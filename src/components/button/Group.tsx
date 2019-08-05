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
      hoverable,
      children
    } = this.props;

    return (
      <View style={[
        styles.buttonGroupContainer,
        type === Types.ButtonGroupTypesEnum.HORIZONTAL && styles.buttonGroupHorizontal,
        { justifyContent: centered ? 'center' : undefined }
      ]}>
        {
          React.Children.map(children, (child: React.ReactElement<ButtonProps>, i) => {
            const marginTop = type === Types.ButtonGroupTypesEnum.HORIZONTAL ? undefined : i !== 0 ? 0 : undefined;
            return (
              React.cloneElement(child, {
                centered,
                fluid,
                hoverable,
                style: {
                  flexGrow: fluid ? 1 : 0,
                  marginTop
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
    margin: 0
  },
  buttonGroupHorizontal: {
    flexDirection: 'row'
  }
});
