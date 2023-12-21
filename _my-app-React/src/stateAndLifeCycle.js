import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() { //asks the browser
    this.timerID = setInterval( () => this.tick(), 1000 );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() { //browser calls tick() every sec
    this.setState( {date: new Date()} );   //calles render()
  }

  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is { this.state.date.toLocaleTimeString() }.</h2>
      </div>
    );
  }

}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
