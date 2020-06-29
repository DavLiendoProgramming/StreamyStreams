import React, { Component } from 'react';

export class GoogleAuth extends Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '964771554797-bjhtdohcn16v8m761dkmcnlrrn2ueu7r.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange();
          //listener for changes in logging status
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return (
        <button className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded">
          Null
        </button>
      );
    } else if (this.state.isSignedIn) {
      return (
        <button className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded">
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded">
          Sign In
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
