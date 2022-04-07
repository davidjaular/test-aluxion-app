import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {uniqBy} from 'lodash';

import styles from '../styles/UserViewStyles';
import Close from '../assets/Close';
import {getUserPhotos} from '../helpers/apiConnector';
import Photo from '../controls/Photo';
import {useFocusEffect} from '@react-navigation/native';

const UserView = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const updatePhotos = useStoreActions(actions => actions.photos.update);

  const {image, data, page} = useStoreState(state => ({
    image: state.photo.data,
    data: state.photos.data,
    page: state.photos.page,
  }));

  useFocusEffect(
    useCallback(() => {
      getUserPhotos(
        result => {
          setLoading(true);

          const filtered = uniqBy([...data, ...result], 'id');

          updatePhotos({data: filtered});

          setLoading(false);
        },
        image.user.username,
        page,
        20,
      );
    }, [page]),
  );

  const goHome = () => {
    updatePhotos({page: 1, data: []});
    navigation.navigate('Home');
  };

  const headerComponent = () => {
    return (
      <>
        <TouchableOpacity activeOpacity={0.6} onPress={goHome}>
          <Close style={styles.close} color="#000" />
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <Image
            source={{uri: image.user.profile_image.small}}
            style={styles.profileImage}
          />
          <View style={styles.detailContainer}>
            <Text style={styles.profileName}>{image.user.name}</Text>
            <Text style={styles.profileView}>{image.user.bio}</Text>
          </View>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>My Photos</Text>
        </View>
      </>
    );
  };

  const renderComponent = ({item, index}) => (
    <Photo image={item} index={index} navigation={navigation} />
  );

  const onRefresh = () => {
    updatePhotos({data: [], page: 1});
  };

  const loadMore = () => updatePhotos({page: page + 1});

  return (
    <FlatList
      refreshing={loading}
      ListHeaderComponent={headerComponent}
      ListHeaderComponentStyle={{
        alignItems: 'flex-start',
      }}
      numColumns={2}
      data={data}
      key={item => item.id}
      contentContainerStyle={styles.flatContainer}
      renderItem={renderComponent}
      onEndReachedThreshold={0.05}
      onEndReached={!loading && loadMore}
      onRefresh={onRefresh}
    />
  );
};

export default UserView;
