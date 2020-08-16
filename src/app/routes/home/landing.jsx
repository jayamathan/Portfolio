import React from "react";
import { Row, Col, Container } from "../../components/layout";
import { LinkButton } from "../../components/button";

const ShortIntro = () => {
  return (
    <div className="intro" title="Introduction">
      <React.Fragment>
        <p className="greeting">Hi! There, I am</p>
        <h1 className="name">
          Jayamathan <span>S</span>
        </h1>
        <h2 className="designation">Product Management Enthusiast</h2>
        <h5 className="location">based in Chennai, India.</h5>
      </React.Fragment>
      <React.Fragment>
        <LinkButton to="/about" label="Know More &#8594;" />
      </React.Fragment>
    </div>
  );
};

const Quote = ({ heading, quote, writer, dir }) => {
  return (
    <React.Fragment>
      <div className={`testimonial-quote ${dir} group`} title="Quote">
        <p>{heading || ""}</p>
        <br />
        <div className="quote-container">
          <blockquote>
            <p>{quote}</p>
          </blockquote>
          <cite>
            <span>{writer}</span>
          </cite>
        </div>
      </div>
    </React.Fragment>
  );
};

const Landing = () => {
  return (
    <section className="landing" title="Landing">
      <Container>
        <Row>
          <Col xs={12} lg={6} md={6} sm={12}>
            <ShortIntro />
          </Col>
          <Col xs={12} lg={6} md={6} sm={12} className="float-right">
            <Quote
              heading="Ideate💡  <Build💻>  /*Launch🚀*/  Learn(📖)"
              quote="Be stubborn on vision but flexible on details!”"
              writer="- Jeff Bezos Amazon"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Landing;
