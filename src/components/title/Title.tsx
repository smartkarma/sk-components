import React from 'react';
import { FontFamilyEnum } from '../../constants/fonts';
import { SizeTypesEnum } from '../../constants/sizes';
import Text from '../text';
import { TitleProps, TitleState } from './type'

export default class Title extends React.Component<TitleProps, TitleState> {
  static defaultProps: TitleProps = {
    ...Text.defaultProps,
    family: FontFamilyEnum.ROBOTO,
    size: SizeTypesEnum.SMALL
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
        weight={500} numberOfLines={1}
        size={size}
        color={color}
      >
        {children}
      </Text>
    );
  }
}
