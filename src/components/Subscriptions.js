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
    const ids = this.state.subsList.map(sub => sub.id);
    const max_id = ids.length > 0 ? Math.max(...ids) : 0;
    
    subsList.push({ 
      id: max_id + 1,
      details: <Subscription />
    });
    this.setState({ subsList });
  }

  render () {
    return (
      <div>
        <div className="subs-list">
        {
          this.state.subsList.map(sub => {
            return (
            <div key={sub.id}>{sub.id}. Subscription</div>
            )
          })
        }
        </div>
        <button className="btn-add" onClick={this.addSub}>+</button>
      </div>
    )
  }
}

export default Subscriptions;