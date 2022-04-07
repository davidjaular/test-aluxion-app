import axios from 'axios';

const apiConnector = axios.create({
  baseURL: 'https://api.unsplash.com/',
  params: {
    client_id:
      'a2f508640cb62f314e0e0763594d40aab1c858a7ef796184067c537a88b276aa',
  },
});

const getPhotos = async (setState, page, perPage) => {
  const {data} = await apiConnector.get('photos', {
    params: {page: page, per_page: perPage},
  });

  setState(data);
};

const getPhoto = async (setState, id) => {
  const {data} = await apiConnector.get(`photos/${id}`);

  setState(data);
};

const getUserProfile = async (setState, username) => {
  const {data} = await apiConnector.get(`users/${username}`);

  setState(data);
};

const getUserPhotos = async (setState, username, page, perPage) => {
  const {data} = await apiConnector.get(`users/${username}/photos`, {
    params: {page: page, per_page: perPage},
  });

  setState(data);
};

export {getPhotos, getPhoto, getUserProfile, getUserPhotos};

export default apiConnector;
