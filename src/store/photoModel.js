import {action, persist} from 'easy-peasy';
import storageEngine from './storage-engine';

export const photoInitialState = {
  id: null,
  data: {},
};

const photoModel = persist(
  {
    ...photoInitialState,

    update: action((state, payload) => {
      if (payload.data) state.data = payload.data;
      if (payload.id) state.id = payload.id;
    }),
  },
  {storage: storageEngine},
);

export default photoModel;
