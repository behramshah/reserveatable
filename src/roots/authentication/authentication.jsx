import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

import './authentication.css'

function Auth() {
  return (
    <div className="authenticationcontainer">
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
}

export default Auth;