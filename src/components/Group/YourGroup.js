import React, { Component } from 'react';
import { Card, Button , Modal, Form } from 'react-bootstrap';
import { Ellipsis } from 'react-css-spinners';
import { FaTimes } from 'react-icons/fa';

import './YourGroup.css';

export class YourGroup extends Component {

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
                return <img className="your-role-image" src={"/roles/duelist.png"}/>
                break;
            case "Initiator":
                return <img className="your-role-image" src={"/roles/initiator.png"}/>
                break;
            case "Sentinel":
                return <img className="your-role-image" src={"/roles/sentinel.png"}/>
                break;
            case "Controller":
                return <img className="your-role-image" src={"/roles/controller.png"}/>
                break;
        }
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

        const isJoinedMember = localStorage.getItem("yourRole") ? true : false;

        return (
            <div>
                <Card className="bg-dark text-white card-style mx-auto">
                <Card.Header style={{backgroundColor: "#161B24", border: "1px solid #FF4654", borderLeft: this.getBorderColour()}}>
                    <div className="container">
                        <div className="row header-info">
                            <div className="col-6 text-left">
                                <span> YOUR GROUP | {this.getRankImageHandler(this.props.group.rank)} {this.props.group.rank}</span>
                            </div>
                            <div className="col-6 text-right my-auto">
                                {isJoinedMember ? <FaTimes onClick={this.props.leaveGroup.bind(this, this.props.group.id)}/> : 
                                    <FaTimes onClick={this.props.deleteGroup.bind(this, this.props.group.id)}/>
                                }
                            </div>
                        </div>
                    </div>

                </Card.Header>
                <Card.Body style={{backgroundColor: "#161B24",  border: "1px solid #FF4654"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-6 pt-3">
                                <div className="row">
                                    <div className="col-6 role-info">
                                        {this.getRoleImageHandler(this.props.group.role1Type)} <br/>
                                        {this.props.group.role1Type}
                                    </div>
                                    <div className="col-6 player-names my-auto">
                                        {this.props.group.role1Member} (You)
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-6 pt-3">
                                <div className="row">
                                    <div className="col-6 role-info">
                                        {this.getRoleImageHandler(this.props.group.role2Type)} <br/>
                                        {this.props.group.role2Type}
                                    </div>
                                    <div className="col-6 my-auto p-0">
                                        {this.props.group.role2Member ? 
                                            <div className="row">
                                                <div className="col-6 player-names my-auto">
                                                    {this.props.group.role2Member}  
                                                </div>
                                                <div className={isJoinedMember ? "col-6 my-auto hide-button" : "col-6 my-auto"}>
                                                    <FaTimes size={20} color="red" onClick={this.props.deleteMember.bind(this, this.props.group.id, "role2Member", this.props.group.role2Type)}/>
                                                </div>
                                            </div>                                            
                                            : 
                                            this.props.group.role2Type ? <Ellipsis/> : ''
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-6 pt-3">
                                <div className="row">
                                    <div className="col-6 role-info">
                                        {this.getRoleImageHandler(this.props.group.role3Type)} <br/>
                                        {this.props.group.role3Type}
                                    </div>
                                    <div className="col-6 my-auto p-0">
                                        {this.props.group.role3Member ? 
                                            <div className="row">
                                                <div className="col-6 player-names my-auto">
                                                    {this.props.group.role3Member}  
                                                </div>
                                                <div className={isJoinedMember ? "col-6 my-auto hide-button" : "col-6 my-auto"}>
                                                    <FaTimes size={20} color="red" onClick={this.props.deleteMember.bind(this, this.props.group.id, "role3Member", this.props.group.role3Type)}/>
                                                </div>
                                            </div>                                            
                                            : 
                                            this.props.group.role3Type ? <Ellipsis/> : ''
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-6 pt-3">
                                <div className="row">
                                    <div className="col-6 role-info">
                                        {this.getRoleImageHandler(this.props.group.role4Type)} <br/>
                                        {this.props.group.role4Type}
                                    </div>
                                    <div className="col-6 my-auto p-0">
                                        {this.props.group.role4Member ? 
                                            <div className="row">
                                                <div className="col-6 player-names my-auto">
                                                    {this.props.group.role4Member}  
                                                </div>
                                                <div className={isJoinedMember ? "col-6 my-auto hide-button" : "col-6 my-auto"}>
                                                    <FaTimes size={20} color="red" 
                                                        onClick={this.props.deleteMember.bind(this, this.props.group.id, "role4Member", this.props.group.role4Type)}/>
                                                </div>
                                            </div>                                            
                                            : 
                                            this.props.group.role4Type ? <Ellipsis/> : ''
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-6 pt-3">
                                <div className="row">
                                    <div className="col-6 role-info">
                                        {this.getRoleImageHandler(this.props.group.role5Type)} <br/>
                                        {this.props.group.role5Type}
                                    </div>
                                    <div className="col-6 my-auto p-0">
                                        {this.props.group.role5Member ? 
                                            <div className="row">
                                                <div className="col-6 player-names my-auto">
                                                    {this.props.group.role5Member}  
                                                </div>
                                                <div className={isJoinedMember ? "col-6 my-auto hide-button" : "col-6 my-auto"}>
                                                    <FaTimes size={20} color="red" 
                                                        onClick={this.props.deleteMember.bind(this, this.props.group.id, "role5Member", this.props.group.role5Type)}/>
                                                </div>
                                            </div>                                            
                                            : 
                                            this.props.group.role5Type ? <Ellipsis/> : ''
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-6 pt-3">
                                <div className="row">
                                    <div className="col-6 role-info">
                                        {this.getRoleImageHandler(this.props.group.role6Type)} <br/>
                                        {this.props.group.role6Type}
                                    </div>
                                    <div className="col-6 my-auto p-0">
                                        {this.props.group.role6Member ? 
                                            <div className="row">
                                                <div className="col-6 player-names my-auto">
                                                    {this.props.group.role6Member}  
                                                </div>
                                                <div className={isJoinedMember ? "col-6 my-auto hide-button" : "col-6 my-auto"}>
                                                    <FaTimes size={20} color="red" 
                                                        onClick={this.props.deleteMember.bind(this, this.props.group.id, "role6Member", this.props.group.role6Type)}/>
                                                </div>
                                            </div>                                            
                                            : 
                                            this.props.group.role6Type ? <Ellipsis/> : ''
                                        }
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
            </div>
        )
    }
}

export default YourGroup
