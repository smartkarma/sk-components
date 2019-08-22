import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors, Sizes } from '../../constants';
import Text from '../text';
import { InfoProps, InfoState } from './type'

export default class Info extends React.Component<InfoProps, InfoState> {
  static defaultProps: InfoProps = {
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
        { title && <Text size={Sizes.SizeTypesEnum.LARGE} weight={700}>{title}</Text>}
        <Text size={Sizes.SizeTypesEnum.MINI} color={Colors.INTELLIGENT_SILVER} family='PTSerif'>{description}</Text>
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
    borderRadius: 1,
    borderStyle: 'dashed',
    borderWidth: .5,
    marginTop: 10,
    padding: 1,
  },
  container: {
    backgroundColor: Colors.WHITE,
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
