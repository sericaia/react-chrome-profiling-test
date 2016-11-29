import React from 'react';

export default class Test extends React.Component {
  render() {
    return (
      <ul>
        <TestOne />
        <TestTwo />
      </ul>
    );
  }
};


class TestOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };

    this.links = [
      'http://www.yld.io',
      'http://blog.yld.io'
    ];
  }

  tick() {
    this.setState({
      url: this.links[Math.floor(Math.random() * 2)]
    });
  }

  componentDidMount() {
    setInterval(this.tick.bind(this), 50);
  }

  render() {
    return (<li>{this.state.url}</li>);
  }
};

class TestTwo extends React.Component {
  render() {
    return (<li>TestTwo</li>);
  }
};
