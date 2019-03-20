import React, { Component } from 'react';
import './App.css';
import Person from './../Components/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Rohit", age: 24, id:'a1'},
      {name: "Sohit", age: 20, id: 'a2'},
      {name: "Ramit", age: 23, id: 'a3'},
      {name: "Mohit", age: 25, id: 'a4'}
    ],
    showPeron:false
  };
  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    })
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };
  deletePersonHandler=(personIndex)=>{
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  };
  togglePersonHandler = () => {
    this.setState({
      showPeron: !this.state.showPeron
    })
  };
  render() {
    const buttonStyle = {
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
          {
            this.state.persons.map((person,index)=>{
              return <Person 
                  click={()=>this.deletePersonHandler(index)}
                  key={person.id} style={buttonStyle}
                  name={person.name} 
                  age={person.age}
                  changed={(event)=>{this.nameChangeHandler(event, person.id)}}/>
            })
          }
        </div>
      );
      buttonStyle.backgroundColor = "green";
    }
    return (
      <div className="App">
        <button style={buttonStyle} onClick={this.togglePersonHandler}>{this.state.showPeron ? <div>Hide Persons</div>:<div>Show Persons</div>}</button>
        {Persons}
      </div>
    );
    // return React.createElement('div', null, React.createElement("h1", {className:'App'},'Hi, I am react app'));
  };
};

export default App;
