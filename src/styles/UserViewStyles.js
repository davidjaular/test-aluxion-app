import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  headerContainer: {marginTop: 54, marginBottom: 33},
  headerText: {
    fontSize: 42,
    color: 'black',
    fontFamily: 'MuseoSansRegular',
    fontWeight: '900',
    marginLeft: 16,
  },
  flatContainer: {backgroundColor: 'white', marginLeft: 10},
  close: {
    marginTop: 60,
    marginLeft: 16,
  },
  detailContainer: {marginLeft: 10},
  profileContainer: {marginTop: 27, marginLeft: 16, flexDirection: 'row'},
  profileImage: {width: 63, height: 63, borderRadius: 30},
  profileName: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'MuseoSansRegular',
    fontWeight: 'bold',
  },
  profileView: {
    color: 'black',
    marginTop: 4,
    width: width - 120,
    fontSize: 12,
    fontFamily: 'MuseoSansRegular',
  },
});

export default styles;
