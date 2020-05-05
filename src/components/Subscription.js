import React, { Component } from 'react';

class Subscription extends Component {
  render () {
    return (
    <div className="box has-background-grey-lighter">
      <div className="media">

        <div className="media-left">
          <p className="image is-64x64">
            <img src={this.props.sub.logo} alt=""></img>
          </p>
        </div>

        <div className="media-content">
          <div className="columns is-flex-mobile">
            <div className="column has-text-left">
              <h1 className="title">{this.props.sub.name}</h1>
              <h2 className="subtitle has-text-weight-light is-lowercase">{this.props.sub.description}</h2>
            </div>

            <div className="column has-text-centered is-hidden-mobile">
              <h1 className="title">{this.props.sub.paymentDate}</h1>
              <h2 className="subtitle has-text-weight-light is-lowercase">in 20 days</h2>
            </div>

            <div className="column has-text-right">
              <h1 className="title is-size-1">£9</h1>
            </div>
          </div>
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