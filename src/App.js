import React, { Component } from 'react'; 
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'max', age: 28},
      {name:'namu', age: 25},
      {name:'rani', age:27}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id)=>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; 
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.Value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons}) 
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

   
  render() {
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {
          this.state.persons.map((person,index )=> {
            return <Person
            Click = {() => this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age}
              key = {person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, i'm a react app</h1>
        <p>This is really working</p>
        <button onClick={ this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
