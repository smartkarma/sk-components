import React from 'react';
import { ViewStyle } from 'react-native';
import { SizeTypes } from '../../constants/sizes';
import { IconFamily } from '../icon/type';

export interface ItemProps {
  Thumbnail?: React.ReactNode;
  style?: ViewStyle;
  iconName?: string;
  iconFamily?: IconFamily;
  iconSize?: SizeTypes;
  metadata: React.ReactNode | string;
  subtitle: React.ReactNode | string;
  title: React.ReactNode | string;
}

export interface ItemState {
}
