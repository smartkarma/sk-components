import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../constants';
import { Icons } from '../../constants';
import { getGeneralPosition } from '../../utils/position';
import * as Types from './type';

export default class Icon extends React.Component<Types.Props, Types.State> {
  static defaultProps: Types.Props = {
    centered: false,
    color: Colors.WHITE,
    fluid: false,
    rightAligned: false,
    size: 'small',
    type: Types.TypesEnum.FONT_AWESOME
  };

  constructor(props: Types.Props) {
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
      style,
      type
    } = this.props;
    const {
      alignSelf
    } = this.state;
    const CurrentIcon = Icons.Family[type];
    return (
      <View
        style={[
          styles.iconContainer,
          {
            alignSelf
          },
          style
        ]}
      >
        <CurrentIcon name='rocket' size={30} color='#900'/>
      </View>
    );
  }
}

const styles = {
  iconContainer: {}
};
