import React from 'react';
import './Track.css';

export default class Track extends React.Component {
  constructor(props) {
    super(props)
    this.addTrack= this.addTrack.bind(this);
    this.renderAction= this.renderAction.bind(this);
    this.removeTrack= this.removeTrack.bind(this);
  }
  renderAction() {
    return (
      <div>
        <button className="Track-action" onClick={this.addTrack}>+</button>
        <button className="Track-action" onClick={this.removeTrack}>-</button>
      </div>
    )
  }

    addTrack() {
      this.props.onAdd(this.props.track);
    }
    removeTrack() {
      this.props.onRemove(this.props.track);
    }
    render() {
        return (
          <div class="Track">
            <div className="Track-information">
              <h3>{this.props.track.name}</h3>
              <p>{this.props.track.artist} | {this.props.track.album}</p>
            </div>
            {this.renderAction()}
          </div>
        )
    }
}

