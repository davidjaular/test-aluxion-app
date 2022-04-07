import React from 'react';
import {useStoreActions} from 'easy-peasy';
import {TouchableHighlight, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/PhotoStyles';

export default function Photo({image, index, navigation}) {
  const updatePhoto = useStoreActions(action => action.photo.update);

  const title = image.description ?? `Author: ${image.user.name}`;

  const navigate = () => {
    updatePhoto({id: image.id, data: image});
    navigation.navigate('Photo');
  };

  return (
    <TouchableHighlight underlayColor="#fff" onPress={navigate}>
      <ImageBackground
        style={{...styles.container, marginTop: index % 2 ? 35 : 0}}
        imageStyle={styles.img}
        source={{uri: image.urls.small}}>
        <LinearGradient
          colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0, 0.75)']}
          style={styles.gradient}>
          <Text style={styles.title}>
            {title?.length > 15 ? `${title?.slice(0, 15)}...` : title}
          </Text>
          <Text style={styles.votes}>{image.likes} votos</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableHighlight>
  );
}
