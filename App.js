import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      searchResults: [],
      playlistName: ['playlist1'],
      playlistTracks: [
        {id: 'track1',
        name: 'song1',
        artist: 'artist1',
        uri: '',
        }, 
        {id: 'track2',
        name: 'song2',
        artist: 'artist2',
        uri: '',
      }, 
        {id: 'track3',
        name: 'song3',
        artist: 'artist3',
        uri: '',
      }
        
      ]
    };
    this.addTrack= this.addTrack.bind(this);
    this.removeTrack= this.removeTrack.bind(this);
    this.updatePlaylistName= this.updatePlaylistName.bind(this);
    this.savePlaylist= this.savePlaylist.bind(this);
    this.search= this.search.bind(this);
  }
  addTrack(track) {
    const idArray = this.state.playlistTracks.map(pltrack => pltrack.id);
    const hasId = idArray.includes(track.id);
    if (!hasId) {
      this.setState(prevState => ({
        playlistTracks: [...prevState.playlistTracks, track]
      }))
    }
  }
  removeTrack(track) {
    const filteredList = this.state.playlistTracks.filter(pltrack => pltrack.id !== track.id);
    this.setState({playlistTracks : [...filteredList]});
  }
  updatePlaylistName(name) {
    this.setState({ playlistName : name });
  }
  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
  }
  search(term) {
    console.log(term);
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults results={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlist={this.state.playlistName} tracklist={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
