import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  img: {
    width,
    height,
    flex: 1,
  },
  gradient: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 33,
    paddingVertical: 26,
  },
  close: {position: 'absolute', top: 60, left: 26},
  title: {
    color: 'white',
    lineHeight: 49,
    fontSize: 42,
    fontFamily: 'MuseoSans-500',
    fontWeight: '900',
  },
  votes: {
    color: '#c1c1c1',
    fontSize: 14,
    fontFamily: 'MuseoSans-500',
    marginTop: 8,
  },
  detailContainer: {marginLeft: 12},
  profileContainer: {marginTop: 26, flexDirection: 'row'},
  profileImage: {width: 37, height: 37, borderRadius: 30},
  profileName: {color: 'white', fontSize: 12},
  profileView: {color: '#c1c1c1', fontSize: 10},
});

export default styles;
