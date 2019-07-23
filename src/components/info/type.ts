import React from 'react';
import { ViewStyle } from 'react-native';

export interface InfoProps {
  componentId?: string;
  title?: string;
  description?: string;
  code?: React.ReactNode;
  style?: ViewStyle;
  children?: React.ReactNode;
}

export interface InfoState {
}
