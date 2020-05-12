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

        <div className="media-content is-clipped">
          <div className="columns is-flex-mobile">
            <div className="column has-text-left">
              <h1 className="title">{this.props.sub.name}</h1>
              <h2 className="subtitle has-text-weight-light is-lowercase">{this.props.sub.description}</h2>
            </div>

            <div className="column has-text-centered is-hidden-mobile">
              <h1 className="title is-size-4">Next payment</h1>
              <h2 className="subtitle has-text-weight-light">{this.props.sub.paymentDate.format("MMM Do")} - {this.props.sub.paymentDate.fromNow()}</h2>
            </div>

            <div className="column has-text-right">
              <h1 className="title">£{this.props.sub.cost}</h1>
              <h2 className="subtitle has-text-weight-light is-lowercase">{this.props.sub.frequency}</h2>
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