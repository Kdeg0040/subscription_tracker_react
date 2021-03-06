import React, { Component } from 'react';
import moment from 'moment';

import Subscription from './Subscription';
import FormModal from './FormModal';

class Subscriptions extends Component {
  constructor() {
    super();

    this.state = {
      subsList: [],
      sortBy: 'paymentDate',
      showModal: false
    };
  }

  addSub = company => {
    const { subsList } = this.state;
    const formData = {...company};

    const ids = this.state.subsList.map(sub => sub.id);
    const max_id = ids.length > 0 ? Math.max(...ids) : 0;

    const numToFloat = (Math.round(formData.cost * 100) / 100).toFixed(2);
    formData.cost = numToFloat;

    const dateString = formData.paymentDate.split('/').join('');
    const dateObject = moment(dateString, 'DDMMYYYY');
    formData.paymentDate = dateObject;
    
    subsList.push({ id: max_id + 1, ...formData });
    this.setState({ subsList });
    this.sortSubs(this.state.sortBy);
    this.hideModalHandler();
  }

  sortSubs = (attr) => {
    this.state.subsList.sort((a, b) => (a[attr] > b[attr]) ? 1 : -1)
  }

  deleteSub = id => {
    const toDelete = this.state.subsList.filter(sub => sub.id === id);
    let makeSure = window.confirm('Are you sure you want to delete ' + toDelete[0].name + '?');
    
    if (makeSure) {
      const subsList = this.state.subsList.filter(sub => sub.id !== id);
      this.setState({ subsList });
    }
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