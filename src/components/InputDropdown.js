import React, { Component } from 'react';

class InputDropdown extends Component {
  render () {
    return (
      <div className={"dropdown is-pulled-left " + this.props.show()}>
        <div className="dropdown-menu">
          <div className="dropdown-content"> 
            {
              this.props.formData.suggestions.map((sugg, ind) => {
                return (
                  <a href="/#" onClick={() => this.props.select(sugg)} className="dropdown-item" key={ind}>
                    <div className="level">
                      <div className="level-left">
                        <div className="level-item">
                          <figure className="image is-32x32">
                            <img src={sugg.logo} alt=""></img>
                          </figure>
                        </div>
                        <div className="level-item">
                        {sugg.name}
                        </div>
                      </div>
                    </div>
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default InputDropdown;