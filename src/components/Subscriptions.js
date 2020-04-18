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
    
    subsList.push({ id: max_id + 1 });
    this.setState({ subsList });
  }

  render () {
    return (
      <div className="subs-list section">
        {
          this.state.subsList.map(sub => {
            return (
              <Subscription key={sub.id} sub={sub} />
            )
          })
        }
        <button className="btn-add button is-success is-light is-outlined is-size-4 is-fullwidth" onClick={this.addSub}><strong>+</strong></button>
      </div>
    )
  }
}

export default Subscriptions;