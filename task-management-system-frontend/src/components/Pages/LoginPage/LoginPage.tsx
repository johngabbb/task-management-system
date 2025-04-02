import { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import SignUpForm from "./SignUpForm/SignUpForm";

interface Props {
  setIsAuthenticated: (e: boolean) => void;
}

const LoginPage = ({ setIsAuthenticated }: Props) => {
  const [signUpActive, setSignUpActive] = useState<boolean>(false);

  const ImageCard = (
    <div className={`flex-1/3 ${signUpActive ? "rounded-r-2xl" : "rounded-l-2xl"}`}>
      <img
        src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwbGFwdG9wfGVufDB8fDB8fHww"
        alt="Coffee and headphones"
        className={`h-full object-cover transition-transform duration-500 ${
          signUpActive ? "-scale-x-100" : ""
        }`}
      />
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-neutral-700 via-neutral-950 to-neutral-950 h-screen overflow-auto">
      <div className="h-full bg-inherit flex items-center justify-center min-w-[600px] min-h-[575px]">
        <div className="w-full max-w-4xl rounded-2xl overflow-hidden">
          <div className="flex flex-wrap relative">
            <div
              className={`flex absolute top-0 transition-transform duration-500 ease-in-out ${
                signUpActive ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {ImageCard}
              {<SignUpForm setSignUpActive={setSignUpActive} />}
            </div>

            <div
              className={`flex transition-transform duration-500 ease-in-out ${
                signUpActive ? "translate-x-full" : "translate-x-0"
              }`}
            >
              {
                <LoginForm
                  setSignUpActive={setSignUpActive}
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
              {ImageCard}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
