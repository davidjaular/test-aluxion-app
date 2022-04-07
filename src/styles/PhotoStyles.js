import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 155,
    height: 220,
    marginHorizontal: 20,
    position: 'relative',
  },
  img: {
    borderRadius: 10,
  },
  gradient: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'MuseoSans-700',
  },
  votes: {
    color: '#c1c1c1',
    fontSize: 10,
    fontFamily: 'MuseoSans-500',
    marginTop: 4,
  },
});

export default styles;
