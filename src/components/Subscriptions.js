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
      <div className="section">
        {
          this.state.subsList.map(sub => {
            return (
            <div className="box has-background-grey-lighter" key={sub.id}>{sub.id}. Subscription</div>
            )
          })
        }
        <button className="btn-add button is-success is-light is-outlined is-size-4 is-fullwidth" onClick={this.addSub}><strong>+</strong></button>
      </div>
    )
  }
}

export default Subscriptions;