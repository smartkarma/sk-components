import { Platform } from 'react-native';

export const onlyWeb = (value: any): any => Platform.OS === 'web' ? value : undefined;
