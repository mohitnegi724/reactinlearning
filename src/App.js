import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: "Rohit",
        age: 24
      },
      {
        name: "Sohit",
        age: 20
      },
      {
        name: "Ramit",
        age: 23
      },
      {
        name: "Mohit",
        age: 25
      }
    ],
    showPeron:false
  };
  switchNameHandler = () => {
    this.setState({
      persons: [
        {
          name: "Mohit",
          age: 24
        },
        {
          name: "Ramit",
          age: 20
        },
        {
          name: "Sohit",
          age: 23
        },
        {
          name: "Ram",
          age: 25
        }
      ]
    });
  };
  nameChangeHandler = event => {
    this.setState({
      persons: [
        {
          name: "Mohit",
          age: 24
        },
        {
          name: event.target.value,
          age: 20
        },
        {
          name: "Sohit",
          age: 23
        },
        {
          name: "Ram",
          age: 25
        }
      ]
    });
  };
  togglePersonHandler = () => {
    this.setState({
      showPeron: !this.state.showPeron
    })
  };
  render() {
    const style = {
      backgroundColor: "black",
      color: "white",
      cursor: "pointer",
      font: "quicksand",
      border: "none",
      outline: "none",
      padding: "15px"
    };
    let Persons = null;
    if(this.state.showPeron){
      Persons = (
        <div>
          <button style={style} onClick={this.switchNameHandler}>
            Switch Name
          </button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangeHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler}
          />
          <Person
            name={this.state.persons[3].name}
            age={this.state.persons[3].age}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <button onClick={this.togglePersonHandler}>Toggle persons</button>
        {Persons}
      </div>
    );
    // return React.createElement('div', null, React.createElement("h1", {className:'App'},'Hi, I am react app'));
  }
}

export default App;
