import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  topContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 16,
    paddingVertical: 9,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  postUsername: {
    marginLeft: 9,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
  },
  postImage: {
    width: '100%',
    height: 375,
  },
  postIcon: {
    marginLeft: 8,
  },
  postInfo: {
    marginLeft: 13,
  },
});
