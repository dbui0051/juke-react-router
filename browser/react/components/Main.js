import React, { Component } from 'react';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import StatefulAlbums from './StatefulAlbums'
import WrongRoutes from './WrongRoutes'
import { HashRouter, Route } from 'react-router-dom';

export default class Main extends Component {

  render () {
    return (
      <HashRouter>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar />
          </div>
            <div className="col-xs-10">
              <Route path="/" component={WrongRoutes} />
              <Route exact path="/" component={StatefulAlbums} />
              <Route exact path="/albums" component={StatefulAlbums} />
              <Route path="/albums/:albumId" component={SingleAlbum} />
              <Route exact path="/artists" component={AllArtists} />
              <Route path="/artists/:artistId" component={SingleArtist} />
            </div>
          <Player />
        </div>
      </HashRouter>
    );
  }
}
