import React, {Component} from 'react';
import axios from 'axios'
import Songs from './Songs'
import AllAlbums from './AllAlbums'
import { Route, Link, NavLink } from 'react-router-dom'
var Promise = require('bluebird');


export default class SingleArtist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            artist: {},
            artistAlbums: [],
            artistSongs: []
        }
    }

    componentDidMount() {
        const artistId = this.props.match.params.artistId;
        const artistPromise = axios.get(`/api/artists/${artistId}`);
        const artistAlbumsPromise = axios.get(`/api/artists/${artistId}/albums`);
        const artistSongsPromise = axios.get(`/api/artists/${artistId}/songs`);

        Promise.all([artistPromise, artistAlbumsPromise, artistSongsPromise])
            .then(results =>
                this.setState({
                    artist: results[0].data,
                    artistAlbums: results[1].data,
                    artistSongs: results[2].data
                }))
            .catch(error => console.log(error))
    }

    render () {

          const artist = this.state.artist
          const albums = this.state.artistAlbums
          const songs = this.state.artistSongs
          const artistId = this.props.match.params.artistId;

          return (
            <div>
              <h3>{ artist.name }</h3>
              <ul className="nav nav-tabs">
                <li><NavLink to={`/artists/${artistId}/albums`} activeClassName="navactivea">ALBUMS</NavLink></li>
                <li><NavLink to={`/artists/${artistId}/songs`} activeClassName="navactiveb">SONGS</NavLink></li>
              </ul>

              <Route path={`/artists/${artistId}/albums`} render={() => <AllAlbums albums={albums} /> } />
              <Route path={`/artists/${artistId}/songs`} render={() => <Songs songs={songs} /> } />
            </div>
          );
        }
}
