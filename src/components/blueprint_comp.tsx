import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Props, State } from './bluprint_type'

export default class Blueprint extends React.Component<Props, State> {
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
    borderRadius: 2,
    margin: 5,
    padding: 5
  }
});
