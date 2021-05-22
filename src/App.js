import React, { Component } from 'react';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './components/Firebase/Firebase';
import { Ring } from 'react-css-spinners';
import YourGroup from './components/Group/YourGroup';
import Footer from './components/Footer/Footer'

class App extends Component {

  state = {
    groups: [],
    yourGroup: null,
    isLoading: true
  }

  ref = firebase.firestore().collection("groups");

  // creates a new group
  createGroupHandler = (newGroup) => {
    this.ref
      .doc(newGroup.id)
      .set(newGroup)
      .then(
        () => {
          localStorage.setItem('yourGroup', newGroup.id);
          this.setState({yourGroup: newGroup})
        }
      )
  }

  getYourGroupHandler = () => {

    const yourGroupid = localStorage.getItem('yourGroup');

    if (yourGroupid) {
      this.ref
        .doc(yourGroupid)
        .get()
        .then(
          (doc) => {
            if (doc.exists) {
              this.setState({yourGroup: doc.data()});
            }
          }
        );
    }
  }

  // deletes the entire group
  deleteGroupHandler = (id) => {
    this.ref
      .doc(id)
      .delete()
      .then(
        () => {
          localStorage.removeItem('yourGroup');
          this.setState({yourGroup: null});
        }
      )
  }

  // deletes a member in a group
  deleteMemberHandler = (id, roleMember, roleType) => {

    let updatedRoles = this.state.yourGroup.availableRoles;
    updatedRoles.push(roleType);
    
    this.ref
      .doc(id)
      .update({
        [roleMember]: '', 
        availableRoles: updatedRoles
      })
      .then(
        console.log("member deleted successfully")
      )
  }

  // fills a role
  fillRoleHandler = (name, id, role, type, availableRoles) => {
    
    // update available roles
    let filteredRoles = availableRoles; 
    filteredRoles.splice(filteredRoles.lastIndexOf(type), 1);

    this.ref
      .doc(id)
      .update({
        [role]: name,
        availableRoles: filteredRoles
      })
  }

  resetFilterHandler = () => {
    // get groups from firestore database
    this.ref
      .orderBy('creationDate', 'desc')
      .onSnapshot(
      (querySnapshot) => {
        const items = [];
        querySnapshot.forEach(
          (doc) => {
            items.push(doc.data());
          }
        );
        this.getYourGroupHandler();
        this.setState({groups: items, isLoading: false});
      }
    );
  }

  sortAndFilterHandler = (sorter, roleFilter, regionFilter) => {

    const order = (sorter === "" || sorter === "Latest") ? "desc" : "asc"; //desc = latest
    const role = (roleFilter === "" || roleFilter === "Any") ? ["Controller", "Duelist", "Sentinel", "Initiator"] : [roleFilter]; 
    const region = regionFilter;

    if (region == "Any") {
      // get groups from firestore database
      this.ref
      .where("availableRoles", "array-contains-any", role)
      .orderBy('creationDate', order)
      .onSnapshot(
        (querySnapshot) => {
          const items = [];
          querySnapshot.forEach(
            (doc) => {
              items.push(doc.data());
            }
          );
          this.getYourGroupHandler();
          this.setState({groups: items, isLoading: false});
        }
      );
    } else {
      // get groups from firestore database
      this.ref
      .where("availableRoles", "array-contains-any", role)
      .where("region", "==", region)
      .orderBy('creationDate', order)
      .onSnapshot(
        (querySnapshot) => {
          const items = [];
          querySnapshot.forEach(
            (doc) => {
              items.push(doc.data());
            }
          );
          this.getYourGroupHandler();
          this.setState({groups: items, isLoading: false});
        }
      );
    }

    
  }

  componentDidMount() {

    // get groups from firestore database
    this.ref
      .orderBy('creationDate', 'desc')
      .onSnapshot(
      (querySnapshot) => {
        const items = [];
        querySnapshot.forEach(
          (doc) => {
            items.push(doc.data());
          }
        );
        this.getYourGroupHandler();
        this.setState({groups: items, isLoading: false});
      }
    );

  }
  
  render() {
    return (
      <div className="App">
        <Header createGroup={this.createGroupHandler}/>
        {this.state.isLoading ? 
          <div className="container min-vh-100">
            <div className="row">
              <div className="col-12 text-center">
                <Ring className="loading" size={150}/> 
              </div>
            </div>
          </div>
        : 
          <Feed groups={this.state.groups} 
            yourGroup={this.state.yourGroup}
            deleteGroup={this.deleteGroupHandler} 
            deleteMember={this.deleteMemberHandler}
            fillRole={this.fillRoleHandler}
            sortAndFilter={this.sortAndFilterHandler}
            resetFilter={this.resetFilterHandler}/>
        }

        <Footer/>
      </div>
      
    );
  }
}

export default App;
