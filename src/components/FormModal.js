import React, { Component } from 'react';

class FormModal extends Component {
  constructor () {
    super ();

    this.state = {
      company: ''
    };
  }

  handleSubmit = (formData) => {
    this.props.save(formData);
    this.setState({
      company: ''
    });
  }

  handleCancel = () => {
    this.props.hide();
    this.setState({
      company: ''
    });
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
          <section className="modal-card-body">
            <div className="form">
                <div className="field">
                  <label className="label has-text-left">Company Name</label>
                  <div className="control">
                  <input className="input-company input" type="text" value={this.state.company} placeholder="e.g. Spotify" onChange={ e => this.setState({ company: e.target.value }) }></input>
                </div>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="btn-save button is-success" onClick={ () => this.handleSubmit(this.state.company) }>Save</button>
            <button className="btn-cancel button" onClick={ () => this.handleCancel() } >Cancel</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default FormModal;