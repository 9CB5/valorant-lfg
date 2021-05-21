import React, { Component } from 'react';
import {Button, Modal, Form, Row, Col} from 'react-bootstrap';
import './Header.css';
import down_arrow from '../../assets/down_arrow.gif';
import { v4 as uuidv4 } from 'uuid';

class Header extends Component {

  state = {
    showCreateModal: false,

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
    message: ''
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

  createGroupHandler = () => {

    // need groupsize

    const availableRoles = [
      this.state.role2,
      this.state.role3,
      this.state.role4,
      this.state.role5,
      this.state.role6
    ]
    
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
  }
  
  render() {
    return (
      <div>
        <div className="banner-image">
          <div className="banner-text">
            <h1 style={{fontFamily:"valorant-font"}}>VaLFG</h1>
            <p className="motto">Build your squad</p>
            <Button 
              variant="primary" 
              onClick={this.modalToggleHandler}> 
                Create Group
            </Button>
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
                    placeholder="Enter Riot ID"
                    onChange={e=>this.setState({name: e.target.value})}
                  />
                  <Form.Text className="text-muted">
                    e.g. Chris#4449                        
                  </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="rank">
                    <Form.Label>Rank</Form.Label>
                    <Form.Control as="select"
                      onChange={e=>this.setState({rank: e.target.value})}
                    >
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
                  </Form.Group>

                  <Form.Group controlId="region">
                    <Form.Label>Region</Form.Label>
                    <Form.Control as="select"
                      onChange={e=>this.setState({region: e.target.value})}
                    >
                      <option>EU</option>
                      <option>US</option>
                      <option>AS</option>
                  
                    </Form.Control>
                  </Form.Group>

                  <Row>
                    <Col>
                      <Form.Group controlId="role1">
                      <Form.Label>Role 1 (You)</Form.Label>
                      <Form.Control as="select"
                        onChange={e=>this.setState({role1: e.target.value})}
                      >
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
                        onChange={e=>this.setState({role2: e.target.value})}
                      >
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
                        onChange={e=>this.setState({role3: e.target.value})}
                      >
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
                        onChange={e=>this.setState({role4: e.target.value})}
                      >
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
                        onChange={e=>this.setState({role5: e.target.value})}
                      >
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
                        onChange={e=>this.setState({role6: e.target.value})}
                      >
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