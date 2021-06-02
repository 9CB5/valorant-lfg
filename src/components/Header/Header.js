import React, { Component } from 'react';
import {Button, Modal, Form, Row, Col, Tooltip, OverlayTrigger} from 'react-bootstrap';
import './Header.css';
import down_arrow from '../../assets/down_arrow.gif';
import { v4 as uuidv4 } from 'uuid';
import { FaLessThanEqual } from 'react-icons/fa';

class Header extends Component {

  state = {
    showCreateModal: false,
    errors: [],
    disableCreateButton: false,

    // variables for new group
    name: '',
    rank: '',
    region: '',
    role1: '',
    role2: '',
    role3: '',
    role4: '',
    role5: '',
    role6: '',
    message: "I'm looking for players to play with!"
  }

  modalToggleHandler = () => {
    this.setState({showCreateModal: !this.state.showCreateModal});
  }

  getGroupSizeHandler = (roles) => {
    let total = 1;

    roles.forEach(
      (role) => {
        if (role !== '') { total++ }
      });

    return total;
  }

  hasError(key) {
    return this.state.errors.indexOf(key) !== -1;
  }

  resetFormHandler = () => {
    this.setState({
      name: '',
      rank: '',
      region: '',
      role1: '',
      role2: '',
      role3: '',
      role4: '',
      role5: '',
      role6: '',
      message: "I'm looking for players to play with!",
      showCreateModal: false
    });

  }

  createGroupHandler = () => {

    const availableRoles = [
      this.state.role2,
      this.state.role3,
      this.state.role4,
      this.state.role5,
      this.state.role6
    ]

    let errors = [];

    if (this.state.name === "" || this.state.name.length > 32) {
      errors.push("username");
    }

    if (this.state.rank === "") {
      errors.push("rank");
    }

    if (this.state.region === "") {
      errors.push("region");
    }

    this.setState({errors: errors});

    if (errors.length > 0) {
      return false;
    } else {
      // build the group object that will be passed on to parent component
      const newGroup = {
        id: uuidv4(),
        creationDate: Date.now(),
        name: this.state.name,
        rank: this.state.rank,
        region: this.state.region,
        role1Type: this.state.role1,
        role1Member: this.state.name,
        role2Type: this.state.role2,
        role2Member: '',
        role3Type: this.state.role3,
        role3Member: '',
        role4Type: this.state.role4,
        role4Member: '',
        role5Type: this.state.role5,
        role5Member: '',
        role6Type: this.state.role6,
        role6Member: '',
        message: this.state.message,
        availableRoles: availableRoles,
        groupsize: this.getGroupSizeHandler(availableRoles)
      }
      this.props.createGroup(newGroup);
      this.resetFormHandler();
    }
  }
  
  render() {

    let myRef = React.createRef();

    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        You already have a group created. 
      </Tooltip>
    );

    return (
      <div>
        <div className="banner-image">
          <div className="banner-text">
            <h1 style={{fontFamily:"valorant-font"}}>VaLFG</h1>
            <p className="motto">Build your squad</p>

            {this.props.yourGroup ? 
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <Button 
                  variant="primary" 
                  className="create-group-button-disabled"
                > 
                    <b>CREATE GROUP</b>
                </Button>
              </OverlayTrigger> : 
              <Button 
              variant="primary" 
              className="create-group-button"
              onClick={this.modalToggleHandler}
              disabled={this.props.yourGroup != null ? true : false}> 
                <b>CREATE GROUP</b>
              </Button>
            }     

            <p className="motto pt-2">OR</p>
            <p className="motto">JOIN A GROUP</p>
            <img src={down_arrow} height="40px"></img>
          </div>
        </div>

        <Modal 
        show={this.state.showCreateModal} 
        onHide={this.modalToggleHandler}
        >
          <Modal.Header closeButton className="modal-header">
          <Modal.Title>Create Group</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
              <Form>
                  <Form.Group controlId="riotID">
                    <Form.Label>Riot ID</Form.Label>
                    <Form.Control type="text" 
                      className={this.hasError("username") ? "form-control is-invalid" : "form-control"}
                      value={this.state.name}
                      onChange={e=>this.setState({name: e.target.value})}
                    />
                    <div className={this.hasError("username") ? "inline-errormsg" : "hidden"}>
                      Please enter a valid username
                    </div>
                  </Form.Group>

                  <Form.Group controlId="rank">
                    <Form.Label>Rank</Form.Label>
                    <Form.Control as="select"
                      className={this.hasError("rank") ? "form-control is-invalid" : "form-control"}
                      value={this.state.rank}
                      onChange={e=>this.setState({rank: e.target.value})}
                      required
                    >
                      <option></option>
                      <option>Radiant</option>
                      <option>Immortal</option>
                      <option>Diamond 3</option>
                      <option>Diamond 2</option>
                      <option>Diamond 1</option>
                      <option>Platinum 3</option>
                      <option>Platinum 2</option>
                      <option>Platinum 1</option>
                      <option>Gold 3</option>
                      <option>Gold 2</option>
                      <option>Gold 1</option>
                      <option>Silver 3</option>
                      <option>Silver 2</option>
                      <option>Silver 1</option>
                      <option>Bronze 3</option>
                      <option>Bronze 2</option>
                      <option>Bronze 1</option>
                      <option>Iron 3</option>
                      <option>Iron 2</option>
                      <option>Iron 1</option>
                    </Form.Control>
                    <div className={this.hasError("rank") ? "inline-errormsg" : "hidden"}>
                      Please select a rank
                    </div>
                  </Form.Group>

                  <Form.Group controlId="region">
                    <Form.Label>Region</Form.Label>
                    <Form.Control as="select"
                      className={this.hasError("region") ? "form-control is-invalid" : "form-control"}
                      value={this.state.region}
                      onChange={e=>this.setState({region: e.target.value})}
                    >
                      <option></option>
                      <option>EU</option>
                      <option>US</option>
                      <option>AS</option>
                  
                    </Form.Control>
                    <div className={this.hasError("region") ? "inline-errormsg" : "hidden"}>
                      Please select a region
                    </div>
                  </Form.Group>

                  <Row>
                    <Col>
                      <Form.Group controlId="role1">
                      <Form.Label>Role 1 (You)</Form.Label>
                      <Form.Control as="select"
                        value={this.state.role1}
                        onChange={e=>this.setState({role1: e.target.value})}
                      >
                        <option></option>
                        <option>Duelist</option>
                        <option>Controller</option>
                        <option>Sentinel</option>
                        <option>Initiator</option>
                      </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="role2">
                      <Form.Label>Role 2</Form.Label>
                      <Form.Control as="select"
                        value={this.state.role2}
                        onChange={e=>this.setState({role2: e.target.value})}
                        disabled={this.state.role1 === "" ? true : false}
                      >
                        <option></option>
                        <option>Duelist</option>
                        <option>Controller</option>
                        <option>Sentinel</option>
                        <option>Initiator</option>
                      </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="role3">
                      <Form.Label>Role 3</Form.Label>
                      <Form.Control as="select"
                        value={this.state.role3}
                        onChange={e=>this.setState({role3: e.target.value})}
                        disabled={this.state.role2 === "" ? true : false}
                      >
                        <option></option>
                        <option>Duelist</option>
                        <option>Controller</option>
                        <option>Sentinel</option>
                        <option>Initiator</option>
                      </Form.Control>
                    </Form.Group>
                    </Col>
                  
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group controlId="role4">
                      <Form.Label>Role 4</Form.Label>
                      <Form.Control as="select"
                        value={this.state.role4}
                        onChange={e=>this.setState({role4: e.target.value})}
                        disabled={this.state.role3 === "" ? true : false}
                      >
                        <option></option>
                        <option>Duelist</option>
                        <option>Controller</option>
                        <option>Sentinel</option>
                        <option>Initiator</option>
                      </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="role5">
                      <Form.Label>Role 5</Form.Label>
                      <Form.Control as="select"
                        value={this.state.role5}
                        onChange={e=>this.setState({role5: e.target.value})}
                        disabled={this.state.role4 === "" ? true : false}
                      >
                        <option></option>
                        <option>Duelist</option>
                        <option>Controller</option>
                        <option>Sentinel</option>
                        <option>Initiator</option>
                      </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="role6">
                      <Form.Label>Role 6</Form.Label>
                      <Form.Control as="select"
                        value={this.state.role6}
                        onChange={e=>this.setState({role6: e.target.value})}
                        disabled={this.state.role5 === "" ? true : false}
                      >
                        <option></option>
                        <option>Duelist</option>
                        <option>Controller</option>
                        <option>Sentinel</option>
                        <option>Initiator</option>
                      </Form.Control>
                    </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="message">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={3} 
                        value={this.state.message}
                        onChange={e=>this.setState({message: e.target.value})}
                      />
                    </Form.Group>
              </Form>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
          <Button 
            variant="secondary" 
            onClick={this.modalToggleHandler}
          >
            Close
          </Button>
          <Button 
            variant="primary" 
            onClick={this.createGroupHandler}
          >
            Create
          </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default Header;