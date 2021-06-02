import React, { Component } from 'react';
import { Card, Button , Modal, Form } from 'react-bootstrap';
import images from '../../assets/ranks/immortal3.png';

import './Group.css';

export class Group extends Component {

    state = {
        showFillModal: false,
        name: '',
        role: '',
        type: '',
        errors: []
    }

    submitFillHandler = () => {

        let errors = [];

        if (this.state.name === "" || this.state.name.length > 32) {
            errors.push("username");
        }

        this.setState({errors: errors});

        if (errors.length > 0) {
            return false;
        } else {
            this.props.fillRole(this.state.name, this.props.group.id, this.state.role, this.state.type, this.props.group.availableRoles)
            this.setState({
                name: '',
                rank: '',
                region: '',
                showFillModal: false
            });
        }
      }

    hasError(key) {
    return this.state.errors.indexOf(key) !== -1;
    }

    getRankImageHandler = (rank) => {
        switch(rank) {
            case "Radiant":
                return <img src={require("../../assets/ranks/radiant.png")}/>
                break;
            case "Immortal 3":
            case "Immortal":
                return <img src={"/ranks/immortal3.png"} height="30px"/>
                break;
            case "Immortal 2":
                return <img src={"/ranks/immortal2.png"} height="30px"/>
                break;
            case "Immortal 1":
                return <img src={"/ranks/immortal1.png"} height="30px"/>
                break;
            case "Diamond 3":
                return <img src={"/ranks/diamond3.png"} height="30px"/>
                break;
            case "Diamond 2":
                return <img src={"/ranks/diamond2.png"} height="30px"/>
                break;
            case "Diamond 1":
                return <img src={"/ranks/diamond1.png"} height="30px"/>
                break;
            case "Platinum 3":
                return <img src={"/ranks/platinum3.png"} height="30px"/>
                break;
            case "Platinum 2":
                return <img src={"/ranks/platinum2.png"} height="30px"/>
                break;
            case "Platinum 1":
                return <img src={"/ranks/platinum1.png"} height="30px"/>
                break;
            case "Gold 3":
                return <img src={"/ranks/gold3.png"} height="30px"/>
                break;
            case "Gold 2":
                return <img src={"/ranks/gold2.png"} height="30px"/>
                break;
            case "Gold 1":
                return <img src={"/ranks/gold1.png"} height="30px"/>
                break;
            case "Silver 3":
                return <img src={"/ranks/silver3.png"} height="30px"/>
                break;
            case "Silver 2":
                return <img src={"/ranks/silver2.png"} height="30px"/>
                break;
            case "Silver 1":
                return <img src={"/ranks/silver1.png"} height="30px"/>
                break;
            case "Bronze 3":
                return <img src={"/ranks/bronze3.png"} height="30px"/>
                break;
            case "Bronze 2":
                return <img src={"/ranks/bronze2.png"} height="30px"/>
                break;
            case "Bronze 1":
                return <img src={"/ranks/bronze1.png"} height="30px"/>
                break;
            case "Iron 3":
                return <img src={"/ranks/iron3.png"} height="30px"/>
                break;
            case "Iron 2":
                return <img src={"/ranks/iron2.png"} height="30px"/>
                break;
            case "Iron 1":
                return <img src={"/ranks/iron1.png"} height="30px"/>
                break;
            default:
                return ''
                break;
        }
    }

    getRoleImageHandler = (role) => {
        switch(role){
            case "Duelist":
                return <img className="role-image" src={"/roles/duelist.png"}/>
                break;
            case "Initiator":
                return <img className="role-image" src={"/roles/initiator.png"}/>
                break;
            case "Sentinel":
                return <img className="role-image" src={"/roles/sentinel.png"}/>
                break;
            case "Controller":
                return <img className="role-image" src={"/roles/controller.png"}/>
                break;
        }
    }

    formChangeHandler = (event) => {
        this.setState({name: event.target.value});
    }

    // needs to take in a rolemember
    modalToggleHandler = (roleMember, roleType) => {
        this.setState({
            showFillModal: !this.state.showFillModal,
            role: roleMember,
            type: roleType
        });
    }

    getBorderColour = () => {
        
        switch (this.props.group.rank) {
            
            case "Radiant":
                return "5px solid white";
            case "Immortal 3":
            case "Immortal 2":
            case "Immortal 1":
            case "Immortal":
                return "5px solid #BD304A";
            case "Diamond 3":
            case "Diamond 2":
            case "Diamond 1":
                return "5px solid #EF97F2";
            case "Platinum 3":
            case "Platinum 2":
            case "Platinum 1":
                return "5px solid #2D8E9D"; 
            case "Gold 3":
            case "Gold 2":
            case "Gold 1":
                return "5px solid #DA921B";  
            case "Silver 3":
            case "Silver 2":
            case "Silver 1":
                return "5px solid #858B8B";
            case "Bronze 3":
            case "Bronze 2":
            case "Bronze 1":
                return "5px solid #8C6F45"; 
            case "Iron 3":
            case "Iron 2":
            case "Iron 1":
                return "5px solid #363636";            
            
        }
    }

    render() {

        const isJoinedMember = localStorage.getItem("yourGroup") ? true : false;

        return (
            <div>
            <Card className="bg-dark text-white card-style mx-auto">
                <Card.Header style={{backgroundColor: "#161B24", borderBottom: "1px solid #2D3338", borderLeft: this.getBorderColour()}}>
                    <div className="container">
                        <div className="row header-info">
                            <div className="col-6 text-left">
                                <span>{this.props.group.role1Member} | {this.getRankImageHandler(this.props.group.rank)} {this.props.group.rank}</span>
                            </div>
                            <div className="col-6 text-right my-auto">
                                <span>{this.props.group.region}</span>
                            </div>
                        </div>
                    </div>

                </Card.Header>
                <Card.Body style={{backgroundColor: "#161B24"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-6 pt-3">
                                <div className="row">
                                    <div className="col-6 role-info">
                                        {this.getRoleImageHandler(this.props.group.role1Type)} <br/>
                                        {this.props.group.role1Type}
                                    </div>
                                    <div className="col-6 role-user my-auto">
                                        {this.props.group.role1Member}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-6 pt-3">
                                <div className="row">
                                    <div className="col-6 role-info">
                                        {this.getRoleImageHandler(this.props.group.role2Type)} <br/>
                                        {this.props.group.role2Type}
                                    </div>
                                    <div className="col-6 role-user my-auto">
                                        {this.props.group.role2Member ? this.props.group.role2Member : 
                                            this.props.group.role2Type ? 
                                            <Button 
                                                className="fill-button"
                                                onClick={() => this.modalToggleHandler("role2Member", this.props.group.role2Type)}
                                                disabled={isJoinedMember}
                                            >
                                                Fill
                                            </Button> : ''}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-6 pt-3">
                                <div className="row">
                                    <div className="col-6 role-info">
                                        {this.getRoleImageHandler(this.props.group.role3Type)} <br/>
                                        {this.props.group.role3Type}
                                    </div>
                                    <div className="col-6 role-user my-auto">
                                        {this.props.group.role3Member ? this.props.group.role3Member : 
                                            this.props.group.role3Type ? 
                                            <Button 
                                                className="fill-button"
                                                onClick={() => this.modalToggleHandler("role3Member", this.props.group.role3Type)}
                                                disabled={isJoinedMember}
                                            >
                                                Fill
                                            </Button>: ''}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-6 pt-3">
                                <div className="row">
                                    <div className="col-6 role-info">
                                        {this.getRoleImageHandler(this.props.group.role4Type)} <br/>
                                        {this.props.group.role4Type}
                                    </div>
                                    <div className="col-6 role-user my-auto">
                                        {this.props.group.role4Member ? this.props.group.role4Member : 
                                            this.props.group.role4Type ? 
                                            <Button 
                                                className="fill-button"
                                                onClick={() => this.modalToggleHandler("role4Member", this.props.group.role4Type)}
                                                disabled={isJoinedMember}
                                            >
                                                Fill
                                            </Button> : ''}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-6 pt-3">
                                <div className="row">
                                    <div className="col-6 role-info">
                                        {this.getRoleImageHandler(this.props.group.role5Type)} <br/>
                                        {this.props.group.role5Type}
                                    </div>
                                    <div className="col-6 role-user my-auto">
                                        {this.props.group.role5Member ? this.props.group.role5Member : 
                                            this.props.group.role5Type ? 
                                            <Button 
                                                className="fill-button"
                                                onClick={() => this.modalToggleHandler("role5Member", this.props.group.role5Type)}
                                                disabled={isJoinedMember}
                                            >
                                                Fill
                                            </Button> : ''}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-6 pt-3">
                                <div className="row">
                                    <div className="col-6 role-info">
                                        {this.getRoleImageHandler(this.props.group.role6Type)} <br/>
                                        {this.props.group.role6Type}
                                    </div>
                                    <div className="col-6 role-user my-auto">
                                        {this.props.group.role6Member ? this.props.group.role6Member : 
                                            this.props.group.role6Type ? 
                                            <Button 
                                                className="fill-button"
                                                onClick={() => this.modalToggleHandler("role6Member", this.props.group.role6Type)}
                                                disabled={isJoinedMember}
                                            >
                                                Fill
                                            </Button> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 text-left message">
                                {this.props.group.message}
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>

            <Modal 
            show={this.state.showFillModal} 
            onHide={this.modalToggleHandler}
            >
            <Modal.Header closeButton className="modal-header">
            <Modal.Title>Fill Role</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
                <Form onChange = {this.formChangeHandler}>
                    <Form.Group controlId="riotID">
                    <Form.Label>Riot ID</Form.Label>
                    <Form.Control
                        className={this.hasError("username") ? "form-control is-invalid" : "form-control"} 
                        type="name" 
                        placeholder="Enter Riot ID" />
                        <div className={this.hasError("username") ? "inline-errormsg" : "hidden"}>
                        Please enter a valid username
                        </div>
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
            <Button variant="primary" 
                onClick={this.submitFillHandler}>
                Fill
            </Button>
            </Modal.Footer>
            </Modal>

            </div>
        )
    }
}

export default Group
