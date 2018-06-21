import React, { Component } from 'react';
import moment from 'moment';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot HTML syntax. JSX lets us include JavaScript functions right along with the HTML, and also allows us to add in components, separate, self-contained chunks of of JSX.
        </p>
      </div>
    );
  }
}

export default App;
