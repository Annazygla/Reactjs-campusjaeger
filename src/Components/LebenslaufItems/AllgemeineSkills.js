import React, { Component } from 'react';

class AllgemeineSkills extends Component {
  static defaultProps = {
      skills: ['Gute Kommunikation', 'ehrgeizig', 'kreativ', 'schnelle Auffassungsgabe', 'selbstständig und zuverlässig']
  }

      render() {
        let allgemeineskills = this.props.skills.map(skill => {
          return <li>{skill}</li>
        });

        return (
          <div className="allgemeineSkills" ref="skill">
            <ul>{allgemeineskills}</ul>
          </div>
        );
      }
    }

export default AllgemeineSkills;
