import {useMemo} from 'react';
import {createStore} from 'easy-peasy';
import photohModel, {photoInitialState} from './photoModel';
import photoshModel, {photosInitialState} from './photosModel';
import userModel, {userInitialState} from './userModel';

let store;

const initialState = {
  user: userInitialState,
  photo: photoInitialState,
  photos: photosInitialState,
};

const models = {
  photos: photoshModel,
  photo: photohModel,
  user: userModel,
};

function initStore(preloadedState = initialState) {
  return createStore(models, {initialState: preloadedState});
}

export const initializeStore = preloadedState => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // Create the store once in the client
  if (!store) {
    store = _store;
  }

  return _store;
};

export function useStore(initialStateParam) {
  const storeMemo = useMemo(
    () => initializeStore(initialStateParam),
    [initialStateParam],
  );

  return storeMemo;
}
