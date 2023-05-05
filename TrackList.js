import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="TrackList">
                {/* <!-- You will add a map method that renders a set of Track components  --> */}
                {this.props.tracks.map(track => <Track onAdd={this.props.onAdd} key={track.id} track={track} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />)}
            </div>
        )
    }
}



export default TrackList;

