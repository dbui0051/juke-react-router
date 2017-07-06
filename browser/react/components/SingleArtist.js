import React, {Component} from 'react';
import axios from 'axios'
import Songs from './Songs'
import AllAlbums from './AllAlbums'
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

    render() {
        return (
            <div>
                <h3>{this.state.artist.name}</h3>
                <h4>ALBUMS</h4>
                <AllAlbums albums = {this.state.artistAlbums}/>
                <h4>SONGS</h4>
                <Songs songs={this.state.artistSongs} />
            </div>
        );
    }
}


