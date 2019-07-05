import React, { Component } from "react";
import "./App.css";
import ListOfFriends from "./Components/ListOfFriends";
import FriendForm from "./Components/FriendForm";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }
  newFriend = data => {
    this.setState({ friends: data });
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        const friends = response.data;
        this.setState({ friends });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
       
          <h1 className="App-title">My Friends List</h1>
        </header>
        <ListOfFriends friends={this.state.friends} />
        <FriendForm newFriend={this.newFriend} />
      </div>
    );
  }
}

export default App;