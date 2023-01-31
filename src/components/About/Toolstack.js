import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {
   SiWindows,
   SiPostman,
   SiPhpstorm, SiDocker, SiXampp,
} from 'react-icons/si';

function Toolstack() {
   return (
     <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>
        <Col xs={4} md={2} className="tech-icons">
           <SiWindows/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
           <SiPhpstorm/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
           <SiPostman/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
           <SiDocker/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
           <SiXampp/>
        </Col>
     </Row>
   );
}

export default Toolstack;
