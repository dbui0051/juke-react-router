import React from 'react';
import { Link } from 'react-router-dom'

const Sidebar = () => {

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <Link to="/albums">ALBUMS</Link>
          <Link to="/artists">ARTISTS</Link>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;


// <Link to="/albums">Go to Albums</Link>
// <Link to={`/albums/${someAlbumId}`}>Go to an Album</Link>