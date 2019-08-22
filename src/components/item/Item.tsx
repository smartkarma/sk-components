import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from '../icon';
import { ItemProps, ItemState } from './type'

export default class Item extends React.Component<ItemProps, ItemState> {
  static defaultProps = {};

  render() {
    const {
      Icon: IconEl,
    } = this.props;
    return (
      <View style={[styles.container]}>
        {
          IconEl
            ? IconEl
            : <Icon />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  }
});
