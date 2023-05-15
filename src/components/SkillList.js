import "./SkillListStyles.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SkillList = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src="https://i.redd.it/k0djb2a8hwr41.png" alt="js" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="html" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="css" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src="https://techinfini.in/wp-content/uploads/2017/09/React-Logo-1.png" alt="react" />
                  <h5>React.JS</h5>
                </div>
                <div className="item">
                  <img src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" alt="mongodb" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="sql" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="node" />
                  <h5>Node.JS</h5>
                </div>
                <div className="item">
                  <img src="https://www.vistarprotech.com/assets/img/portfolio/p8.png" alt="express" />
                  <h5>Express.JS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SkillList;
