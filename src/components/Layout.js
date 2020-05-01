import React from 'react';

const layout = (props) => (
  <div className="column is-three-fifths-widescreen is-offset-one-fifth-widescreen has-text-centered">
    {props.children}
  </div>
);

export default layout;