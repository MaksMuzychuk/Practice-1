import React, { Fragment } from 'react';
import Button from '../UI/Button';
import Title from '../UI/Title';
import styles from './Sessions.module.css';

const Sessions = (props) => {
  return (
    <Fragment>
      <Title>Sessions</Title>
      <Button>Add Session</Button>
      <p1>Sessions List</p1>
    </Fragment>
  );
};

export default Sessions;
