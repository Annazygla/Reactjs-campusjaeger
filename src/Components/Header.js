import React, {Component} from 'react';
import Main from './Main';
import Navbar from './Navbar';

class Header extends Component {
  render(){
  return(
  <div>
    <Navbar />
    <Main />
  </div>
    )
  }
}
export default Header;
