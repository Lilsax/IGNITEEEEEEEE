import axios from 'axios';
import { populargamesURL, upcomingGamesURL, newGamesURL } from '../api';

export const loadGames = () => async (dispatch) => {
  const popluarDate = await axios.get(populargamesURL()).catch((e) => alert(e));
  const upcomingGames = await axios
    .get(upcomingGamesURL())
    .catch((e) => alert(e));
  const newGames = await axios.get(newGamesURL()).catch((e) => alert(e));

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popluarDate.data.results,
      upcoming: upcomingGames.data.results,
      newGames: newGames.data.results,
    },
  });
};
