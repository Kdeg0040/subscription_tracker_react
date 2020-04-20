import React, { Component } from 'react';

class Subscription extends Component {
  render () {
    return (
    <div 
      className="box has-background-grey-lighter">{this.props.sub.id}. {this.props.sub.details.company}
    </div>
    );
  }
}

export default Subscription;