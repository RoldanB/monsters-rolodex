import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

// Component allows to use state
// can also do: class App extends React.Component
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };

    // Can also approach handleChange property this way
    // Binds the 'this' property to handleChange
    // Becomes verbose (scroll down for arrow function way)
    // this.handleChange = this.handleChange.bind(this);
  }

  // Instead of this:
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }
  // Do this because it auto binds
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  // once component loads on DOM
  // make API call 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // loads to DOM
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    /* same as typing: const monsters = this.state.monsters (same for searchField) */

    return (
      <div className="App">
        {/* Can use this as well instead of using function way
        <SearchBox placeholder='Search monsters' handleChange={e => this.setState({ searchField: e.target.value })} />*/}
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search monsters' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}></CardList> {/* Monsters is a prop */}
      </div>
    );
  }
}

/* Default way without use of class component. Does not allow stateful change */
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
