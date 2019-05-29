import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Members extends Component {
  state = {
    members: [],
    name: ""
  };

  componentDidMount() {
    this.loadMembers();
  }

  loadMembers = () => {
    API.getMembers()
      .then(res =>
        this.setState({ members: res.data })
      )
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name) {
      API.saveMember({
        name: this.state.name,
  
      })
        .then(res => this.loadMembers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Members Log</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="name (required)"
              />
              
              <FormBtn
                disabled={!(this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Clock in/out
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Members</h1>
            </Jumbotron>
            {this.state.members.length ? (
              <List>
                {this.state.members.map(member => (
                  <ListItem key={member._id}>
                    <Link to={"/members/" + member._id}>
                      <strong>
                        {member.name} at {member.time}
                      </strong>
                    </Link>
                   
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Members;
