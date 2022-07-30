import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

export default StyleSheet.create({
  topContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 6,
  },
  topContainerIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTouchebleOpacity: {
    marginRight: 20,
  },
  historyImage: {
    height: 60,
    width: 60,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'transparent',
  },
  historyScrollView: {
    marginTop: 12,
  },
  historyItemContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  historyItem: {
    height: 70,
    width: 70,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewedHistory: {
    borderWidth: 2.3,
    borderColor: 'orange',
  },
  unreviewedHistory: {
    borderWidth: 1,
    borderColor: Colors.UnActiveGray,
  },
  mainScrollView: {
    marginBottom: 36,
  },
});
