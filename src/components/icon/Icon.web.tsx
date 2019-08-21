import React from 'react';
import { StyleSheet, View } from 'react-native';
import IconFA from 'react-native-vector-icons/dist/FontAwesome';
import { Props, State } from './type';

export default class Icon extends React.Component<Props, State> {
  static defaultProps = {};

  render() {
    return (
      <View style={[styles.container]}>
        <IconFA name='rocket' size={30} color='#900'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 2
  }
});
