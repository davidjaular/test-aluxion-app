import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {marginTop: 54, marginBottom: 33},
  headerText: {
    fontSize: 26,
    color: 'black',
    fontFamily: 'MuseoSansRegular',
    fontWeight: '700',
  },
  bars: {position: 'absolute', left: 26, top: 60, zIndex: 1},
  flatContainer: {alignItems: 'center', backgroundColor: 'white'},
});

export default styles;
