import React, { Fragment } from 'react';

export default ({ list = [], render: Item }) => (
  <Fragment>
    {list.map((props, key) => (
        <Item key={key} {...props} />
    ))}
  </Fragment>
);
