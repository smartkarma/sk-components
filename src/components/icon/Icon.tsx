import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Props, State } from './type';

export default class Icon extends React.Component<Props, State> {
  static defaultProps = {};

  render() {
    return (
      <View style={[styles.container]}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 2
  }
});
