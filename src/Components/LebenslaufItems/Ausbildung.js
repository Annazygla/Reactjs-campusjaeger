import React, { Component } from 'react';

class Ausbildung extends Component {
  render() {
    const ZeitraumStudium = '08/2015 - 03/2019';
    const Studium = (
      <p>Studium <br/>
          Kunstschule Wandsbek<br/>
      "Kommunikationsdesignerin"
      </p>
      );

      const ZeitraumBerufsfachschule = '08/2013 - 08/2015';
      const Berufsfachschule = (
        <p>Berufsfachschule <br />
        Berufliche Medienschule Wandsbek <br />
        Staatlich geprüfte Assistentin für Screen Design
        </p>
        );

        const ZeitraumRealschule = '08/2007 - 05/2013';
        const Realschule = (
          <p>Realschule <br />
          Gesamtschule Benzenbergweg /
          Gemeinschaftsschule mit Förderzentrumsteil Büchen <br />
          Realschulabschluss / Mittlere Reife
          </p>
          );

    return(
      <div>
      <table>
      <tr><td>{ZeitraumStudium}</td>
      <td>{Studium}</td></tr>
      <tr><td>{ZeitraumBerufsfachschule}</td>
      <td>{Berufsfachschule}</td></tr>
      <tr><td>{ZeitraumRealschule}</td>
      <td>{Realschule}</td></tr>
      </table>
      </div>
    )
  }
};

export default Ausbildung;
