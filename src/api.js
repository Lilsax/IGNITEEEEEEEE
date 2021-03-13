const baseURL = 'https://api.rawg.io/api/';

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate() + 1;

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const upcomingGamesURL = () => `${baseURL}${upcoming_games}`;
export const newGamesURL = () => `${baseURL}${newGames}`;
export const populargamesURL = () => `${baseURL}${popularGames}`;

export const gameDetailsURL = (game_id) => `${baseURL}games/${game_id}`;

export const gameScreenshotURL = (game_id) =>
  `${baseURL}games/${game_id}/screenshots`;
