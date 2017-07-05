import React, { Component } from 'react';
import axios from 'axios'

export default class SingleArtist extends Component {
  constructor(props){
    super(props)
    this.state = {
      artist: {},
      albums: [],
      songs: []
    }
  }

  componentDidMount () {
    axios.get('/artistId')
    .then(response => response.data)
    .then(data => this.setState({artists: data}))
    .catch(error => console.log(error))


    axios.get('/:artistId/albums')
    .then(response => response.data)
    .then(albums => this.setState({albums})
    .catch(error => console.log(error))

    
     axios.get('/:artistId/songs')
     .then(response => response.data)
     .then(songs => this.setState({songs}))

  }

  render () {

    return (
        <div>
          <h3>{this.state.artist}</h3>
          <h4>ALBUMS</h4>
          <h4>SONGS</h4>
        </div>
    );
  }
}


