import React, { Component } from 'react';

class Subscription extends Component {
  render () {
    return (
    <div className="box has-background-grey-lighter">
      <div className="media">

        <div className="media-left">
          <p className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt=""></img>
          </p>
        </div>

        <div className="media-content">
        <h1 className="title">{this.props.sub.details.company}</h1>
        <h2 className="subtitle has-text-weight-light is-lowercase">description</h2>
        </div>

        <div className="media-right">
          <button className="btn-delete delete" onClick={ () => this.props.delete(this.props.sub.id) }>Delete</button>
        </div>

      </div>
    </div>
    );
  }
}

export default Subscription;