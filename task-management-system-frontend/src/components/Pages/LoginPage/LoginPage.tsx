import { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import SignUpForm from "./SignUpForm/SignUpForm";

interface Props {}

const LoginPage = (props: Props) => {
  const [signUpActive, setSignUpActive] = useState<boolean>(false);

  const ImageCard = (
    <div className="flex-1/2 rounded-none">
      <img
        src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwbGFwdG9wfGVufDB8fDB8fHww"
        alt="Coffee and headphones"
        className={`h-full object-cover ${signUpActive ? "-scale-x-100" : ""}`}
      />
    </div>
  );

  return (
    <div className="h-full bg-inherit flex items-center justify-center min-w-[600px] min-h-[520px]">
      <div className="w-full max-w-4xl rounded-lg overflow-auto">
        <div className="flex flex-wrap">
          {!signUpActive ? (
            <>
              {<LoginForm setSignUpActive={setSignUpActive} />}
              {ImageCard}
            </>
          ) : (
            <>
              {ImageCard}
              {<SignUpForm setSignUpActive={setSignUpActive} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
