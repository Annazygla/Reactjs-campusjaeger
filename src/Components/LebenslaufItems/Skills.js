import React, { Component } from 'react';

class Skills extends Component {
  static defaultProps = {
      skills: [
        'Sehr gute Kenntnisse: Adobe Creative Suite - (Photoshop CC, InDesign CC, Illustrator CC, After Effects CC, Premiere Pro CC)',
'HTML / CSS / CMS WordPress, Typo3',
'Gute Kenntnisse: Cinema 4D / JavaScript / PHP / CMS (Contao)'
      ]
  }

      render() {
        let skills = this.props.skills.map(skill => { return <li>{skill}</li> });

        return (
          <div className="Skills" ref="skill">
            {skills}
          </div>
        );
      }
    }

export default Skills;
