import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Herkese selamlar, ben <span className="purple">Derviş TOPRAK </span><br/>
            Junior fullstack web geliştiriciyim.
            <br />
            <br />
            Kodlamadan başka yapmaktan zevk aldığım aktivitiler
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Video Oyunu Oynamak
            </li>
            <li className="about-activity">
              <ImPointRight /> Spor Yapmak
            </li>
            <li className="about-activity">
              <ImPointRight /> Film İzlemek
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
