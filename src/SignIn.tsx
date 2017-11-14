import * as React from "react";
import { auth, googleAuthProvider } from "./firebaseDB";

class SignIn extends React.Component {
  signIn = () => auth.signInWithPopup(googleAuthProvider);

  render() {
    return (
      <div className="SignIn">
        <button onClick={this.signIn}>Sign In</button>
      </div>
    );
  }
}

export default SignIn;
