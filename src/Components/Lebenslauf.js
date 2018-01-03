import React, {Component} from 'react';
import Skills from './LebenslaufItems/Skills';
import AllgemeineSkills from './LebenslaufItems/AllgemeineSkills';
import Ausbildung from './LebenslaufItems/Ausbildung';
import Berufe from './LebenslaufItems/Berufe';

class Lebenslauf extends Component {
  render() {
    return(
      <div className="container">
        <h1>Lebenslauf</h1>
          <h5>Persönliche Daten</h5>
          <div className="row">
          <div className="col s4">
            <p><strong>Geboren</strong><br/>
            04. April 1997 in Hamburg </p>
          </div>

          <div className="col s4">
            <p><strong>Staatsangehörigkeit</strong><br/>
            Deutsch</p>
          </div>

          <div className="col s4">
            <p><strong>Familienstand </strong><br/>
            Ledig</p>
          </div>
          </div>
          <br/>

          <h5>Schulbildung</h5>
            <Ausbildung />
          <br />

          <h5>Beruflicher Werdegang</h5>
          <Berufe />
          <br />

          <h5>Fachliche Kompetenzen</h5>
          <br/>

          <Skills />
          <br/>

          <h5>Allgemeine Kompetenzen</h5>
          <AllgemeineSkills />

      </div>
      )
    }
}
export default Lebenslauf;
