import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

class Navbar extends Component {
  render() {
    return(
      <div>
      <nav>
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">Anna Zygla</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Lebenslauf">Lebenslauf</Link></li>
              </ul>
        </div>
      </nav>
    </div>
      )
    }
}
export default Navbar;
