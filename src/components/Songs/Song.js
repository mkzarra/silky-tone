import React from 'react';

import Card from '../UI/Card/Card';

export default function Song(props) {
  return (
    <div>
      <Card>
        {...props}
      </Card>
    </div>
  );
}