import React from 'react';

import classes from './Card.module.scss';

export default function Card(props) {
  return (
    <div className={classes.Card}>
      {props.children}
    </div>
  );
}