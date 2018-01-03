import React, { Component } from 'react';


class LebenslaufItem extends Component {
      render() {
        return (
          <li className="Lebenslauf">
          {this.props.Lebenslauf.Schule} <br />
          {this.props.Lebenslauf.Jahr} <br />
          {this.probps.Lebenslauf.Abschluss}
          </li>
        );
      }
    }

export default LebenslaufItem;
