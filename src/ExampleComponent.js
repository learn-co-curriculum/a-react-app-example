import React, { Component } from 'react';

// no need to modify anything in here. The second test is looking for the returned JSX from this component
class ExampleComponent extends Component {
  render() {
    return (
      <div className="example">
        <img src="https://s3.amazonaws.com/ironboard-learn/sunglasses.gif" alt="whoa"/>
        <p>Whoa!</p>
      </div>
    );
  }
}

export default ExampleComponent;
