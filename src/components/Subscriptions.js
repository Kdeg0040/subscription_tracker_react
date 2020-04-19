import React, { Component } from 'react';

import Subscription from './Subscription';
import FormModal from './FormModal';

class Subscriptions extends Component {
  constructor() {
    super();

    this.state = {
      subsList: [],
      showModal: false
    };
  }

  addSub = () => {
    const { subsList } = this.state;
    const ids = this.state.subsList.map(sub => sub.id);
    const max_id = ids.length > 0 ? Math.max(...ids) : 0;
    
    subsList.push({ id: max_id + 1 });
    this.setState({ subsList });
  }

  showModalHandler = () => {
    this.setState({ showModal: true });  
  }

  hideModalHandler = () => {
    this.setState({ showModal: false });
  }

  modalToggle = () => {
    return this.state.showModal ? "modal is-active" : "modal";
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
        <button className="btn-add button is-success is-light is-outlined is-size-4 is-fullwidth" onClick={this.showModalHandler}><strong>+</strong></button>
        <FormModal show={ this.modalToggle() } hide={ this.hideModalHandler } />
      </div>
    )
  }
}

export default Subscriptions;