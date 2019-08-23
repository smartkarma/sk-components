import React from 'react';
import { View } from 'react-native';
import { SizeTypesEnum } from '../../constants/sizes';
import { getGeneralPosition } from '../../utils/position';
import Text from '../text';
import { LabelProps, LabelState, LabelTypes, LabelTypesEnum, LabelTypeValue } from './type';

export default class Label extends React.Component<LabelProps, LabelState> {
  static defaultProps: LabelProps = {
    centered: false,
    family: null,
    fluid: false,
    rightAligned: false,
    size: SizeTypesEnum.TINY,
    type: LabelTypesEnum.NORMAL
  };

  public static Types = LabelTypesEnum;

  constructor(props: LabelProps) {
    super(props);
    const {
      centered,
      fluid,
      rightAligned
    } = props;
    // Position
    const alignSelf: any = getGeneralPosition({ centered, fluid, rightAligned });

    this.state = {
      alignSelf
    };
  }

  render() {
    const {
      size,
      style,
      type
    } = this.props;
    const {
      alignSelf
    } = this.state;
    return (
      <View style={[
        styles.labelContainer(type),
        {
          alignSelf
        },
        style
      ]}>
        <Text size={size}>Label</Text>
      </View>
    );
  }
}

const styles = {
  labelContainer: (type: LabelTypes) => ({
    ...LabelTypeValue[type].container
  })
};
