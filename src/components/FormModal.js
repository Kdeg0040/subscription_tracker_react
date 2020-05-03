import React, { Component } from 'react';

import InputDropdown from './InputDropdown';

class FormModal extends Component {
  constructor () {
    super ();

    this.state = {
      name: '',
      description: '',
      paymentDate: '',
      logo: '',
      suggestions: []
    };

    this.initialState = this.state;
  }

  handleSubmit = (formData) => {
    this.props.save(formData);
    this.setState(this.initialState);
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
                  <input className="input-company input" type="text" value={this.state.name} placeholder="e.g. Spotify" onChange={ e => this.handleCompanyInputChange(e.target.value) }></input>
                  <span className="icon is-small is-left">
                    <i className="fas fa-search"></i>
                  </span>
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
                      <select>
                        <option>Daily</option>
                        <option>Fortnightly</option>
                        <option selected>Monthly</option>
                        <option>Annually</option>
                      </select>
                    </span>
                    <span className="icon is-small is-left">
                      <i className="fas fa-redo-alt"></i>
                    </span>
                </div>
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