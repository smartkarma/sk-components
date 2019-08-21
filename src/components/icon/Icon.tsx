import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../constants';
import { Icons } from '../../constants';
import * as Types from './type';

export default class Icon extends React.Component<Types.Props, Types.State> {
  static defaultProps: Types.Props = {
    color: Colors.WHITE,
    size: 'small',
    type: Types.TypesEnum.FONT_AWESOME
  };

  render() {
    const {
      type
    } = this.props;
    const CurrentIcon = Icons.Family[type];
    return (
      <View style={[styles.container]}>
        <CurrentIcon name='rocket' size={30} color='#900'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 2
  }
});
