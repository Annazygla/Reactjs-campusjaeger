import React, {Component} from 'react';
import bewerbungsfoto from '../img/bewerbungsfoto.jpg';

class Home extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
        <div className="col s9">
        <h1>Hallo Jannik,</h1>
        <p>Ich bin mir die ganze Zeit unsicher ob ich dich duzen darf oder eher siezen soll, ich bleibe vorerst aber einmal beim du wenn das okay ist?
        Ich habe mich nun die letzten Tage mit react auseinander gesetzt und wurde die ersten drei Tage gefrustet da meine App nie über den dev-Server starten wollte.
        Dann hat dieses doch noch funktioniert und ich bekam nach und nach bei allem Fehlermeldungen. Ich war sehr gefrustet denn ich dachte mir das es doch nicht so schwer sein kann.
        Aber wie man sieht hat vieles doch noch funktioniert. Ich hoffe das ich die Verwendung richtig verstanden habe und nicht doch zu kompliert gearbeitet habe.
        Nun aber genug davon, ich freue mich das ich die zwei Seiten zustande bekommen habe.
        <br />
        <br />
        Ich bin sehr begeistert von reactjs und würde mich sehr darüber freuen weiterhin mit Unterstützung mein wissen dazu erweitern zu können.
        <br />
        <br />
          Freundliche Grüße
          <br />
          Anna Zygla
         </p>
        </div>
        <div className="col s3"><img src={bewerbungsfoto} alt="bewerbungsfoto" className="bewerbungsfoto" /></div>
         </div>
      </div>
      )
    }
}
export default Home;
