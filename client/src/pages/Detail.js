import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    member: {}
  };
  
  componentDidMount() {
    API.getMember(this.props.match.params.id)
      .then(res => this.setState({ member: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.member.title} by {this.state.member.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
      
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to members</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
