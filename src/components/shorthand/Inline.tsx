import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Inline extends React.Component {
  static defaultProps = {};

  render() {
    return (
      <View style={[styles.container]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});
