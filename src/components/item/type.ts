import React from 'react';
import { ViewStyle } from 'react-native';
import { SizeTypes } from '../../constants/sizes';
import { IconFamily } from '../icon/type';

export interface ItemProps {
  Icon?: React.ReactElement;
  style?: ViewStyle;
  iconName?: string;
  iconFamily?: IconFamily;
  iconSize?: SizeTypes
}

export interface ItemState {
}
