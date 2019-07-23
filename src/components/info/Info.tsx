import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../constants';
import Text from '../text';
import * as Types from './type'

export default class Info extends React.Component<Types.InfoProps, Types.InfoState> {
  static defaultProps: Types.InfoProps = {
    description: 'All about your awesome component pieces here',
  };

  render() {
    const {
      description,
      title,
      children
    } = this.props;
    return (
      <View style={[styles.container]}>
        { title && <Text weight={700}>{title}</Text>}
        <Text color={Colors.INTELLIGENT_SILVER} type='PTSerif'>{description}</Text>
        {
          children && (
            <View style={[styles.componentContainer]}>
              {children}
            </View>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  componentContainer: {
    borderColor: Colors.INTELLIGENT_SILVER,
    borderStyle: 'dashed',
    borderWidth: .5,
    marginTop: 10
  },
  container: {
    elevation: 3,
    margin: 5,
    padding: 15,
    shadowColor: Colors.ACTIVE_BLACK,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});
