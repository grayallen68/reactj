import React, { Component } from 'react';
import Nav from './navBar.js';
import './info.css';
import birds from './resources/birds.js';
//import './info.css';

class Info extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <h2>Birds List</h2>
      <ul className="nameList">
        {birds.map(({name}) => (
          <li><a key={name} href={`/info/${name}`}><p className="nameListItem">{name}</p>
          </a></li>
        ))}
      </ul>
      
      </div>
    );
  }
}


export default Info;