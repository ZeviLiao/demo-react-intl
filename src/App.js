import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { FormattedMessage } from 'react-intl';

class App extends React.Component {

  render() {
    const { setLang } = this.props
    return (
      <div style={{ margin: '3rem' }}>
        <button onClick={() => setLang('en')}>en</button>
        &nbsp;&nbsp;
        <button onClick={() => setLang('zh')}>tw</button>
        <br />
        <p>&nbsp;</p>
        <FormattedMessage
          id='superHello'
          description='say hello to Howard.'
          defaultMessage='Hello, Howard!'
          values={{
            someone: <b>this.props.name</b>
          }}
        />
      </div >

    );
  }
}

export default App;
