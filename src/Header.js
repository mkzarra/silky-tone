import React from 'react';

import classes from './Header.module.scss';

export default function Header(props) {
  return (
    <div>
      <header className={classes.Header}>
        <div>
          <span>
            <div onClick={props.backToLanding}>
              Silky Tone
            </div>
          </span>
        </div>
      </header>
    </div>
  );
}