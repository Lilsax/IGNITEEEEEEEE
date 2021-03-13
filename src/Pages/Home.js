import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesActions';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import Gamess from '../Componts/Games';
import GameDetails from '../Componts/GameDetails';

export default function Home() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const { upcoming, newGames, popluar } = useSelector((state) => state.games);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(loadGames());
  }, [dispath]);
  return (
    <Gamelist>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {path && <GameDetails pathid={path} />}
        </AnimatePresence>
        <h2>Up Coming Games</h2>
        <Games>
          {upcoming.map((item, index) => {
            return (
              <Gamess
                key={item.id}
                name={item.name}
                released={item.released}
                id={item.id}
                img={item.background_image}
              />
            );
          })}
        </Games>

        <h2>Popular Games</h2>
        <Games>
          {popluar.map((item, index) => {
            return (
              <Gamess
                key={item.id}
                name={item.name}
                released={item.released}
                id={item.id}
                img={item.background_image}
              />
            );
          })}
        </Games>

        <h2>New Games</h2>
        <Games>
          {newGames.map((item, index) => {
            return (
              <Gamess
                key={item.id}
                name={item.name}
                released={item.released}
                id={item.id}
                img={item.background_image}
              />
            );
          })}
        </Games>
      </AnimateSharedLayout>
    </Gamelist>
  );
}

const Gamelist = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;
