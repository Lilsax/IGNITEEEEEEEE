import axios from 'axios';
import { gameDetailsURL, gameScreenshotURL } from '../api';

export const LoadDetail = (gameId) => async (dispatch) => {
  dispatch({
    type: 'LOADING_DETAIL',
  });
  const details = await axios
    .get(gameDetailsURL(gameId))
    .catch((e) => alert(e));

  const screens = await axios
    .get(gameScreenshotURL(gameId))
    .catch((e) => alert(e));

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: details.data,
      screen: screens.data,
    },
  });
};
