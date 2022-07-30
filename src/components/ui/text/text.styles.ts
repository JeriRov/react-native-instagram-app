import {StyleSheet} from 'react-native';
import {AgEnum} from './text.types';

export default StyleSheet.create({
  [AgEnum.H1]: {
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.36,
    fontWeight: '700',
  },
  [AgEnum.SUBTITLE]: {
    fontSize: 12,
    lineHeight: 22,
  },
  [AgEnum.BOLD]: {
    fontSize: 13,
    lineHeight: 22,
    fontWeight: 'bold',
  },
});
