import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
export class GoogleAuth extends Component {
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
          this.onAuthChange(this.auth.isSignedIn.get());
          //listener for changes in logging status
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return (
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
          Null
        </button>
      );
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={this.onSignOut}
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={this.onSignIn}
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signOut, signIn })(GoogleAuth);
