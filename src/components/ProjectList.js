import React, { Component } from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';

export class ProjectList extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
  }
  render() {
    const {projects} = this.props;
    return (
        <div className="ImgWrapper">{projects.map(o => <img className="ProjectListImg" src={o.img} key={v4()}/>)}</div>
    )
  }
}

export default ProjectList