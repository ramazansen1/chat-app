import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebaseConfig";

const Auth = () => {
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="auth">
        <h1>Chat Room</h1>
        <p>Sign in with Google to continue</p>
        <button onClick={handleClick}>
          <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" />
          <span>Login with Google</span>
        </button>
      </div>
    </>
  );
};

export default Auth;
