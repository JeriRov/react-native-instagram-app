import React from 'react';
import {TextProps} from 'react-native';

export enum AgEnum {
  H1 = 'h1',
  SUBTITLE = 'SUBTITLE',
  BOLD = 'BOLD',
}

export interface IText extends TextProps {
  Ag: AgEnum;
  children?: string | React.ReactNode[];
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  color?: string;
}
