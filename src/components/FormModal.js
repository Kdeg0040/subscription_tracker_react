import React from 'react';

const formModal = (props) => (
  <div className={ props.show }>
    <div className="modal-background" onClick={ () => props.hide() }></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Subscription Details</p>
        <button className="btn-cross delete" aria-label="close" onClick={ () => props.hide() }></button>
      </header>
      <section className="modal-card-body">
        <div className="form">
            <div className="field">
              <label className="label has-text-left">Company Name</label>
              <div className="control">
              <input className="input" type="text" placeholder="e.g. Spotify"></input>
            </div>
          </div>
        </div>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success">Save</button>
        <button className="btn-cancel button" onClick={ () => props.hide() } >Cancel</button>
      </footer>
    </div>
  </div>
);

export default formModal;