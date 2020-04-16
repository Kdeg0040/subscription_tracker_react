import React, { Component } from 'react';

import Subscription from './Subscription';

class Subscriptions extends Component {
  constructor() {
    super();

    this.state = {
      subsList: []
    };
  }

  addSub = () => {
    const { subsList } = this.state;
    subsList.push(<Subscription />);
    this.setState({ subsList });
  }

  render () {
    return (
      <div>
        <button className="btn-add" onClick={this.addSub}>+</button>
      </div>
    )
  }
}

export default Subscriptions;