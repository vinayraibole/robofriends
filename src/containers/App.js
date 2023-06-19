import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
// import {robots} from './robots'; //For one's that aren't default we have to destructure the import (putting the brackets around it)
import './App.css';
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  // Life Cycle Hooks
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }


  //Arrow function should be used apart from existing functions of Component so as to not get error which stops us from reading state of App
  onSearchChange = (event) =>{
    this.setState({searchfield:event.target.value})
  }

  render(){
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
    <h1 className="f1 tc">Loading Robots</h1> :
    (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots= {filteredRobots}/>
          </ErrorBoundary>  
        </Scroll>
      </div>
    );
  }
}

export default App;