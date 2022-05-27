import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Toolbar extends Component {
  static propTypes = {
    onSelectFilter: PropTypes.func.isRequired,
    filters: PropTypes.array.isRequired,
  }

  onSelect = (event) => {
      this.props.onSelectFilter(event.target.innerHTML);
    }

  render() {
    return (
        <div className="Toolbar"> {
          this.props.filters.map(item => <button className="btn" onClick={this.onSelect} key={item}>{item}</button>)
        }
        </div>
    )}
}

export default Toolbar