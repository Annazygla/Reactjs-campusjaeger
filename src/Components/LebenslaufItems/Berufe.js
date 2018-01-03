import React, { Component } from 'react';

class Berufe extends Component {
  render() {
    const Zeitraum01 = '08/2017 - 12/2017';
    const Werdegang01 = (
      <p>Hamburg Messe und Congress <br />
Werkstudentin Online Aushilfe
      </p>
      );

      const Zeitraum02 = '08/2016 - 08/2017';
      const Werdegang02 = (
        <p>Funke Mediengruppe <br />
        Werkstudentin Online-Bereich
        </p>
        );

        const Zeitraum03 = '05/2016 - 07/2016';
        const Werdegang03 = (
          <p>Flüggedesign <br />
          (Kunstschule Wandsbek) <br />
          Kommunikationsdesignerin
          </p>
          );

          const Zeitraum04 = '06/2016 - 07/2016';
          const Werdegang04 = (
            <p>Runtime Services <br />
            Zara Verkaufsaushilfe <br />
            (kurzfristige Beschäftigung)
            </p>
            );

          const Zeitraum05 = '09/2015 - 12/2015';
          const Werdegang05 = (
            <p>GVO Personal GmbH <br />
            Kellnerin & Inventurhelferin <br />
            (kurzfristige Beschäftigung)
            </p>
            );

          const Zeitraum06 = '02/2015 - 04/2015';
          const Werdegang06 = (
            <p>Ganser & Hanke Musikmarketing <br />
            Screendesignerin
            </p>
            );

          const Zeitraum07 = '10/2014 - 01/2015';
          const Werdegang07 = (
            <p>Ganser & Hanke Musikmarketing <br />
            Schülerpraktikum
            </p>
            );

          const Zeitraum08 = '07/2013 - 10/2014';
          const Werdegang08 = (
            <p>G&H Kommunikation GmbH & Co. KG <br />
            Screendesignerin
            </p>
            );

          const Zeitraum09 = '07/2012 - 07/2012';
          const Werdegang09 = (
            <p>Bücherei Schwarzenbek <br />
            Schülerpraktikum
            </p>
            );

    return(
      <div>
      <table>
      <tr><td>{Zeitraum01}</td>
      <td>{Werdegang01}</td></tr>

      <tr><td>{Zeitraum02}</td>
      <td>{Werdegang02}</td></tr>

      <tr><td>{Zeitraum03}</td>
      <td>{Werdegang03}</td></tr>

      <tr><td>{Zeitraum04}</td>
      <td>{Werdegang04}</td></tr>

      <tr><td>{Zeitraum05}</td>
      <td>{Werdegang05}</td></tr>

      <tr><td>{Zeitraum06}</td>
      <td>{Werdegang06}</td></tr>

      <tr><td>{Zeitraum07}</td>
      <td>{Werdegang07}</td></tr>

      <tr><td>{Zeitraum08}</td>
      <td>{Werdegang08}</td></tr>

      <tr><td>{Zeitraum09}</td>
      <td>{Werdegang09}</td></tr>
      </table>
      </div>
    )
  }
};

export default Berufe;
