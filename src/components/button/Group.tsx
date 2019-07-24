import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Types from './type';

export default class Group extends React.Component<Types.ButtonGroupProps, Types.ButtonGroupState> {
  static defaultProps: Types.ButtonGroupProps = {
    type: Types.ButtonGroupTypesEnum.VERTICAL
  };

  public static Types = Types.ButtonGroupTypesEnum;

  render() {
    const {
      type,
      children
    } = this.props;
    return (
      <View style={[
        styles.buttonGroupContainer,
        type === Types.ButtonGroupTypesEnum.HORIZONTAL && styles.buttonGroupHorizontal
      ]}>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonGroupContainer: {
    margin: 5
  },
  buttonGroupHorizontal: {
    flexDirection: 'row'
  }
});
