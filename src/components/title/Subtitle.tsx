import React from 'react';
import { Colors } from '../../constants';
import { FontFamilyEnum } from '../../constants/fonts';
import { SizeTypesEnum } from '../../constants/sizes';
import Text from '../text';
import { TitleProps, TitleState } from './type'

export default class Subtitle extends React.Component<TitleProps, TitleState> {
  static defaultProps: TitleProps = {
    ...Text.defaultProps,
    color: Colors.GREY_GREY,
    family: FontFamilyEnum.ROBOTO,
    size: SizeTypesEnum.MINI
  };

  render() {
    const {
      children,
      color,
      size
    } = this.props;
    return (
      <Text
        {...this.props}
        numberOfLines={1}
        size={size}
        color={color}
      >
        {children}
      </Text>
    );
  }
}
