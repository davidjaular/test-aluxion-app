import {action, persist} from 'easy-peasy';
import storageEngine from './storage-engine';

export const photoInitialState = {
  page: 1,
  perPage: 20,
  data: [],
};

const photoModel = persist(
  {
    ...photoInitialState,

    update: action((state, payload) => {
      if (payload.data) state.data = payload.data;
      if (payload.page) state.page = payload.page;
      if (payload.perPage) state.perPage = payload.perPage;
    }),
  },
  {storage: storageEngine},
);

export default photoModel;
