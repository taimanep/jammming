import React from 'react';
import './SearchResults';
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.results} onAdd={this.props.onAdd} isRemoval={false} />
            </div>
        )
    }
}

export default SearchResults;