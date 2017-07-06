import React from 'react';
import { Link } from 'react-router-dom'

const Sidebar = () => {

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <div><Link to="/albums">ALBUMS</Link></div>
          <div><Link to="/artists">ARTISTS</Link></div>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
