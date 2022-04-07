import React from 'react';
import {StoreProvider} from 'easy-peasy';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {useStore} from './store';
import Navigation from './navigation';

enableScreens();

const App = () => {
  const store = useStore();

  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
