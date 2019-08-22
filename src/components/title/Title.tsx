import React from 'react';
import { FontFamilyEnum } from '../../constants/fonts';
import { SizeTypesEnum } from '../../constants/sizes';
import Text from '../text';
import { TitleProps, TitleState } from './type'

export default class Title extends React.Component<TitleProps, TitleState> {
  static defaultProps: TitleProps = {
    family: FontFamilyEnum.ROBOTO,
    size: SizeTypesEnum.SMALL,
    type: null
  };

  render() {
    const {
      children,
      size
    } = this.props;
    return (
      <Text
        weight={500} numberOfLines={1}
        size={size}
      >
        {children}
      </Text>
    );
  }
}
