import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useDispatch } from 'react-redux';
import { LoadDetail } from '../actions/detailAction';
import { Link } from 'react-router-dom';

import { smallImage } from '../util';

export default function Games({ name, img, released, id }) {
  const stringID = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(LoadDetail(id));
  };
  return (
    <StyledGame layoutId={stringID} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringID}`}> {name} </motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringID}`}
          src={smallImage(img, 640)}
          alt=""
        />
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 2rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
