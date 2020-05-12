import React, { Component } from 'react';
import moment from 'moment';

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

  addSub = company => {
    const { subsList } = this.state;
    const formData = {...company};

    const ids = this.state.subsList.map(sub => sub.id);
    const max_id = ids.length > 0 ? Math.max(...ids) : 0;

    const dateString = formData.paymentDate.split('/').join('');
    const dateObject = moment(dateString, 'DDMMYYYY');
    formData.paymentDate = dateObject;
    
    subsList.push({ id: max_id + 1, ...formData });
    this.setState({ subsList });
    this.sortSubs();
    this.hideModalHandler();
  }

  sortSubs = () => {
    this.state.subsList.sort((a, b) => (a.paymentDate > b.paymentDate) ? 1 : -1)
  }

  deleteSub = id => {
    const subsList = this.state.subsList.filter(sub => sub.id !== id);
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
              <Subscription key={sub.id} sub={sub} delete={this.deleteSub} />
            )
          })
        }
        <button className="btn-add button is-success is-light is-outlined is-size-4 is-fullwidth" onClick={this.showModalHandler}><strong>+</strong></button>
        <FormModal show={ this.modalToggle() } hide={ this.hideModalHandler } save={ this.addSub } />
      </div>
    )
  }
}

export default Subscriptions;