import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  render() {
    const { lat, errorMessage } = this.state;

    if (!lat && !errorMessage)
      return <Spinner message="Please accept location request" />;

    return (
      <div>
        {lat && <SeasonDisplay lat={lat} />}
        <br />
        {errorMessage && `Error: ${errorMessage}`}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
