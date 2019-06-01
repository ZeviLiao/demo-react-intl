import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { FormattedMessage } from 'react-intl';

class App extends React.Component {
  render() {
    return (
      <FormattedMessage
        id='superHello'
        description='say hello to Howard.'
        defaultMessage='Hello, Howard!'
        values={{
          someone: <b>this.props.name</b>
        }}
      />
    );
  }
}

export default App;
