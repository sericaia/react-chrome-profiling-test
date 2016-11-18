import React from 'react';

export default class Test extends React.Component {
  render() {
    return (
      <ul>
        <TestSimple />
        <TestUpdate />
      </ul>
    );
  }
};

class TestSimple extends React.Component {
  render() {
    return (<li>TestSimple</li>);
  }
};

class TestUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
  }

  add() {
    this.setState({
      total: this.state.total + 1
    });
  }

  render() {
    return (
      <li>
        TestUpdate ({this.state.total}) 
        <button onClick={this.add.bind(this)}>Add</button>
      </li>
    );
  }
};
