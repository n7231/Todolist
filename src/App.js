import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    isHidden: true
    } 
  }

  toggleHidden(){
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  showList(){
    this.setState({
      isHidden: false
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1> TodoList start </h1>
        </div>
          <p className="App-intro" >
        </p>
        <button class='btn btn-primary' onClick = {this.toggleHidden.bind(this)}>
        {this.state.isHidden ? 'off' : 'on'}
        </button>
         <Todo isHidden={this.state.isHidden}  showList={this.showList.bind(this)}/>
      </div>
    );
  }
}

export default App;
