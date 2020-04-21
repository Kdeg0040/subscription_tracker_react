import React, { Component } from 'react';

class Subscription extends Component {
  render () {
    return (
    <div className="box has-background-grey-lighter">
      {this.props.sub.id}. {this.props.sub.details.company}
      <button className="btn-delete" onClick={ () => this.props.delete(this.props.sub.id) }>Delete</button>
    </div>
    );
  }
}

export default Subscription;