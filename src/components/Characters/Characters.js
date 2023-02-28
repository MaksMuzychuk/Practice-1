import React, { Fragment } from 'react';
import Button from '../UI/Button';
import Title from '../UI/Title';
import styles from './Characters.module.css';

const Characters = (props) => {
  return (
    <Fragment>
      <Title>Characters</Title>
      <Button>Add Character</Button>
      <p1>Character List</p1>
    </Fragment>
  );
};

export default Characters;
