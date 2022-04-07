import React, {useState, useCallback} from 'react';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {uniqBy} from 'lodash';
import {FlatList, View, Text, StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {getPhotos} from '../helpers/apiConnector';
import Photo from '../controls/Photo';
import Bars from '../assets/Bars';
import styles from '../styles/HomeViewStyles';

const HomeView = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const {data, page} = useStoreState(store => store.photos);
  const updatePhotos = useStoreActions(actions => actions.photos.update);

  useFocusEffect(
    useCallback(() => {
      getPhotos(
        result => {
          setLoading(true);

          const filtered = uniqBy([...data, ...result], 'id');

          updatePhotos({data: filtered});

          setLoading(false);
        },
        page,
        20,
      );
    }, [page]),
  );

  const headerComponent = () => {
    return (
      <>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Discover</Text>
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
    <>
      <StatusBar hidden />
      <Bars style={styles.bars} />
      <FlatList
        refreshing={loading}
        ListHeaderComponent={headerComponent}
        numColumns={2}
        data={data}
        key={item => item.id}
        contentContainerStyle={styles.flatContainer}
        renderItem={renderComponent}
        onEndReachedThreshold={0.05}
        onEndReached={!loading && loadMore}
        onRefresh={onRefresh}
      />
    </>
  );
};

export default HomeView;
