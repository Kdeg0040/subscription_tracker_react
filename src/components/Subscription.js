import React, { Component } from 'react';

class Subscription extends Component {
  constructor() {
    super();

    this.state = { company: '' };
  }
  
  render () {
    return (
      <div className="box has-background-grey-lighter">{this.props.sub.id}. Subscription</div>
    );
  }
}

export default Subscription;