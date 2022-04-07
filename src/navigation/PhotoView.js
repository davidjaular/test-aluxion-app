import React, {useRef} from 'react';
import {
  Text,
  View,
  Image,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Easing,
} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {uniqBy} from 'lodash';
import PagerView from 'react-native-pager-view';
import LinearGradient from 'react-native-linear-gradient';

import {getPhotos} from '../helpers/apiConnector';
import Close from '../assets/Close';
import styles from '../styles/PhotoViewStyles';

const LinearGradientAnimated = Animated.createAnimatedComponent(LinearGradient);

const PhotoView = ({navigation}) => {
  const value = useRef(new Animated.Value(0)).current;

  Animated.timing(value, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
    easing: Easing.ease,
  }).start();

  const translateY = value.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0],
  });

  const {image, photos, page} = useStoreState(state => ({
    image: state.photo.data,
    photos: state.photos.data,
    page: state.photos.page,
  }));

  const {updatePhotos, updatePhoto} = useStoreActions(action => ({
    updatePhotos: action.photos.update,
    updatePhoto: action.photo.update,
  }));

  const title = image.description ?? `Author: ${image.user.name}`;

  const handlePage = p => {
    const pos = p.nativeEvent.position;
    if (pos === photos.length - 1) {
      getPhotos(
        result => {
          const filtered = uniqBy([...photos, ...result], 'id');

          updatePhotos({data: filtered, page: page + 1});
        },
        page + 1,
        20,
      );
    }
    updatePhoto({data: photos[pos]});
  };

  const initialPage = photos.indexOf(image);

  const profileNavigate = () => {
    updatePhotos({page: 1, data: []});
    navigation.navigate('User');
  };

  const goBack = () => {
    updatePhotos({page: 1, data: []});
    navigation.goBack();
  };

  return (
    <PagerView
      style={{flex: 1}}
      onPageSelected={handlePage}
      initialPage={initialPage}>
      {photos.map(item => (
        <View key={item.id}>
          <Image
            style={[StyleSheet.absoluteFill, styles.img]}
            source={{uri: item.urls.regular}}
          />
          <TouchableOpacity activeOpacity={0.6} onPress={goBack}>
            <Close style={styles.close} />
          </TouchableOpacity>
          <LinearGradientAnimated
            colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0, 0.75)']}
            style={[styles.gradient, {transform: [{translateY}]}]}>
            <Text style={styles.title}>
              {title.length > 35 ? `${title.slice(0, 35)}...` : title}
            </Text>
            <Text style={styles.votes}>{item.likes} votos</Text>
            <TouchableOpacity onPress={profileNavigate}>
              <View style={styles.profileContainer}>
                <Image
                  source={{uri: item.user.profile_image.small}}
                  style={styles.profileImage}
                />

                <View style={styles.detailContainer}>
                  <Text style={styles.profileName}>{item.user.name}</Text>
                  <Text style={styles.profileView}>View Profile</Text>
                </View>
              </View>
            </TouchableOpacity>
          </LinearGradientAnimated>
        </View>
      ))}
    </PagerView>
  );
};

export default PhotoView;
