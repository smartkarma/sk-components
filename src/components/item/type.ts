import React from 'react';
import { ViewStyle } from 'react-native';
import { SizeTypes } from '../../constants/sizes';
import { IconFamily } from '../icon/type';

export interface ItemProps {
  style?: ViewStyle;
  iconName?: string;
  iconFamily?: IconFamily;
  iconSize?: SizeTypes;
  metadata: React.ReactNode | string;
  subtitle: React.ReactNode | string;
  thumbnail?: React.ReactNode;
  title: React.ReactNode | string;
}

export interface ItemState {
}
