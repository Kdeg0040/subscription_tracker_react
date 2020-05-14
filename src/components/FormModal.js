import React, { Component } from 'react';

import InputDropdown from './InputDropdown';

class FormModal extends Component {
  constructor () {
    super ();

    this.state = {
      name: '',
      description: '',
      paymentDate: '',
      frequency: 'Monthly',
      cost: '',
      logo: '',
      suggestions: [],
      nameError: ''
    };

    this.initialState = this.state;
  }

  handleSubmit = (formData) => {
    if (this.isFormValid()) {
      this.props.save(formData);
      this.setState(this.initialState);
    }
  }

  isFormValid = () => {
    if (this.state.name.length === 0 || !this.state.name.trim()) {
      this.setState({ nameError: 'Name is required' });
      return false;
    } else {
      this.setState({ nameError: '' });
      return true;
    }
  }

  handleCancel = () => {
    this.props.hide();
    this.setState(this.initialState);
  }

  handleCompanyInputChange = (input) => {
    this.setState({ name: input })
    this.handleSuggestions(input);
  }

  handleSuggestions = async (partialCompanyName) => {
    const queryString = partialCompanyName
    const endpoint = 'https://autocomplete.clearbit.com/v1/companies/suggest?query=:';

    const response = await fetch(endpoint + queryString)
    const data = await response.json();

    this.setState({ suggestions: data })
  }

  handleSuggestionSelection = (selected) => {
    this.setState({ 
      name: selected.name,
      logo: selected.logo,
      suggestions: []
    })
  }

  showSuggestions = () => {
    return this.state.suggestions.length > 0 ? 'is-active' : ''
  }

  render () {
    return (
      <div className={ this.props.show }>
        <div className="modal-background" onClick={ () => this.handleCancel() }></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Subscription Details</p>
            <button className="btn-cross delete" aria-label="close" onClick={ () => this.handleCancel() }></button>
          </header>
          <section className="modal-card-body" onClick={() => this.setState({ suggestions: [] })}>
            <div className="form">

              <div className="field">
                <label className="label has-text-left">Company Name</label>
                <div className="control is-expanded has-icons-left">
                  <input className={"input-company input" + (this.state.nameError ? ' is-danger' : '') } type="text" value={this.state.name} placeholder="e.g. Spotify" onChange={ e => this.handleCompanyInputChange(e.target.value) }></input>
                  <span className="icon is-small is-left">
                    <i className="fas fa-search"></i>
                  </span>
                  <p className="help is-danger">{this.state.nameError}</p>
                </div>
                <InputDropdown formData={this.state} select={this.handleSuggestionSelection} show={this.showSuggestions} />
              </div>

              <div className="field">
                <label className="label has-text-left">Description</label>
                <div className="control is-expanded has-icons-left">
                  <input className="input-description input" type="text" value={this.state.description} placeholder="e.g. Music Streaming" onChange={ e => this.setState({ description: e.target.value })}></input>
                  <span className="icon is-small is-left">
                    <i className="fas fa-list"></i>
                  </span>
                </div>
              </div>

              <label className="label has-text-left">Payment Date</label>
              <div className="field has-addons">
                <div className="control is-expanded has-icons-left">
                  <input className="input-payment-date input" type="text" value={this.state.paymentDate} placeholder="dd/mm/yyyy" onChange={ e => this.setState({ paymentDate: e.target.value })}></input>
                  <span className="icon is-small is-left">
                    <i className="fas fa-calendar-alt"></i>
                  </span>
                </div>

                <div className="control has-icons-left">
                  <span className="select">
                    <select className="frequency-input" value={this.state.frequency} onChange={ e => this.setState({ frequency: e.target.value })}>
                      <option value="Daily">Daily</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Fortnightly">Fortnightly</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Annually">Annually</option>
                    </select>
                  </span>
                  <span className="icon is-small is-left">
                    <i className="fas fa-redo-alt"></i>
                  </span>
                </div>
              </div>

              <label className="label has-text-left">Cost</label>
              <div className="field has-addons">
                <p className="control">
                  <span className="select">
                    <select>
                    <option>£</option>
                    <option>$</option>
                    <option>€</option>
                    </select>
                  </span>
                </p>
                <p className="control">
                  <input className="input-cost input" value={this.state.cost} type="text" placeholder="Amount of money" onChange={ e => this.setState({ cost: e.target.value }) }></input>
                </p>
              </div>

            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="btn-save button is-success" onClick={ () => this.handleSubmit(this.state) }>Save</button>
            <button className="btn-cancel button" onClick={ () => this.handleCancel() } >Cancel</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default FormModal;