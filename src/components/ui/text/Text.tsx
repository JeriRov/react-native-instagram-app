import React from 'react';
import {Text as RNText} from 'react-native';
import {IText} from './text.types';
import textStyles from './text.styles';
import {Colors} from '../../../theme';

export const Text = (props: IText) => {
  const {Ag, color, align} = props;

  return (
    <RNText
      {...props}
      style={[
        textStyles[Ag],
        {
          color: color || Colors.black,
          textAlign: align || 'auto',
        },
        props.style,
      ]}
    />
  );
};
