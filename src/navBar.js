import React, { Component } from 'react';
import ImageUpload from './imageupload';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './navBar.css';

class Nav extends Component {
    constructor(props) {
          super(props);
  
          this.state = {};
  
          this.handleScroll = this.handleScroll.bind(this);
      }
  
      handleScroll() {
          this.setState({scroll: window.scrollY});
      }
    
    componentDidMount() {
          const el = document.querySelector('nav');
          this.setState({top: el.offsetTop, height: el.offsetHeight});
          window.addEventListener('scroll', this.handleScroll);
      }
    
    componentDidUpdate() {
          this.state.scroll > this.state.top ? 
              document.body.style.paddingTop = `${this.state.height}px` :
              document.body.style.paddingTop = 0;
      }
    
    render() {
      return (
        <nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
          <ul className="navul">
            <a className="navList" href='/'>Home</a>
            <a className="navList" href='/info'>Birds</a>
            <a className="navList" href='/about'>About</a>
          </ul>
        </nav>
      );
    }
  }
  
export default Nav;