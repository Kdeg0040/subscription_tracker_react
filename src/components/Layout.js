import React from 'react';

const layout = (props) => (
  <div className="column is-three-fifths is-offset-one-fifth has-text-centered">
    {props.children}
  </div>
);

export default layout;