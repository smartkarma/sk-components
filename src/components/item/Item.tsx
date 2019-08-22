import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../constants';
import { SizeTypesEnum } from '../../constants/sizes';
import Icon from '../icon';
import { IconTypesEnum } from '../icon/type';
import Text from '../text';
import { ItemProps, ItemState } from './type'

export default class Item extends React.Component<ItemProps, ItemState> {
  static defaultProps = {};

  render() {
    const {
      Icon: IconEl,
      metadata,
      subtitle,
      title,
    } = this.props;
    return (
      <View style={[styles.container]}>
        {
          IconEl
            ? IconEl
            : <Icon size={SizeTypesEnum.LARGE} type={IconTypesEnum.SQUARE} />
        }
        <View style={[styles.captionContainer]}>
          <Text weight={500} numberOfLines={1}>{title}</Text>
          <Text color={Colors.GREY_GREY} size={SizeTypesEnum.MINI} numberOfLines={1}>{subtitle}</Text>
          <Text color={Colors.SHADY_GREY} size={SizeTypesEnum.TINY} numberOfLines={1}>{metadata}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  captionContainer: {
    flex: 1,
    paddingLeft: 10
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  }
});
