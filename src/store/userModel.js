import {action, persist} from 'easy-peasy';
import storageEngine from './storage-engine';

export const userInitialState = {
  data: {
    username: '',
    name: '',
    first_name: '',
    last_name: '',
    instagram_username: '',
    twitter_username: '',
    portfolio_url: null,
    bio: '',
    location: '',
    profile_image: {
      small: '',
      medium: '',
      large: '',
    },
  },
};

const userModel = persist(
  {
    ...userInitialState,

    update: action((state, payload) => {
      if (payload.data) state.data = payload.data;
    }),
  },
  {storage: storageEngine},
);

export default userModel;
