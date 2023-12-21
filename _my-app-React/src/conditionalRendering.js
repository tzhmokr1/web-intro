
import React from 'react';
import ReactDOM from 'react-dom';

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div>       
    <h1>Warning</h1>
    </div>
  )
}


class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ( {showWarning: !state.showWarning }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'show'}
        </button>
      </div>
    );
  }

}


ReactDOM.render(
  <Page />,
  document.getElementById('root')
);