import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import {
   AiFillGithub,
   AiOutlineTwitter,
   AiFillInstagram,
} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';

function Home2() {
   return (
     <Container fluid className="home-about-section" id="about">
        <Container>
           <Row>
              <Col md={8} className="home-about-description">
                 <h1 style={{fontSize: '2.6em'}}>
                    KENDİMİ <span className="purple"> TANITAYIM </span>
                 </h1>
                 <p className="home-about-body">
                    Bilgisayara karşı ilgim küçük yaşlarımdan beri var.
                    <br/>
                    <br/>Programlama ile tanışmam klasik olarak
                    <i>
                       <b className="purple"> C, C++ ve Java</b>
                    </i> ile oldu.
                    <br/>
                    <br/>
                    Şu anda <i><b className="purple">full stack</b></i> web programlamaya karşı ilgim daha fazla ve bu alanda çalışmaktayım.
                    <br/>
                    <br/>
                    Arkaplanda <i><b className="purple">Laravel</b></i> framework ile <i><b className="purple">PHP</b></i> kullanırken, ön planda sade
                    <i><b className="purple"> CSS </b></i>,
                    <i><b className="purple"> Bootstrap 3-4-5 </b></i> ve <i><b className="purple">Tailwind</b></i> kütüphaneleri ile çalıştım.
                    Aynı zamanda sade <i><b className="purple">Javascript</b></i> ile birlikte <i><b className="purple">JQuery</b></i> kütüphanesini de kullanmaktayım.
                    Veritabanı kısmında ise <i><b className="purple">Microsoft SQL Server</b></i> ile başladım ve sırasıyla <i><b className="purple">MYSQL</b></i>,
                    <i><b className="purple"> PostgreSQL</b></i> ve <i><b className="purple">MongoDB</b></i> teknolojilerini kullandım.
                 </p>
              </Col>
              <Col md={4} className="myAvtar">
                 <Tilt>
                    <img src={myImg} className="img-fluid" alt="avatar"/>
                 </Tilt>
              </Col>
           </Row>
           <Row>
              <Col md={12} className="home-about-social">
                 <h1>BANA ULAŞIN</h1>
                 <p>
                    Bana aşağıdaki <span className="purple">sosyal </span> mecralardan ulaşabilirsiniz.
                 </p>
                 <ul className="home-about-social-links">
                    <li className="social-icons">
                       <a
                         href="https://github.com/dervistprk"
                         target="_blank"
                         rel="noreferrer"
                         className="icon-colour  home-social-icons"
                       >
                          <AiFillGithub/>
                       </a>
                    </li>
                    <li className="social-icons">
                       <a
                         href="https://twitter.com/dervistprk"
                         target="_blank"
                         rel="noreferrer"
                         className="icon-colour  home-social-icons"
                       >
                          <AiOutlineTwitter/>
                       </a>
                    </li>
                    <li className="social-icons">
                       <a
                         href="https://www.linkedin.com/in/dervis-toprak/"
                         target="_blank"
                         rel="noreferrer"
                         className="icon-colour  home-social-icons"
                       >
                          <FaLinkedinIn/>
                       </a>
                    </li>
                    <li className="social-icons">
                       <a
                         href="https://www.instagram.com/dervistprk"
                         target="_blank"
                         rel="noreferrer"
                         className="icon-colour home-social-icons"
                       >
                          <AiFillInstagram/>
                       </a>
                    </li>
                 </ul>
              </Col>
           </Row>
        </Container>
     </Container>
   );
}

export default Home2;
