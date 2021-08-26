import React from "react";
import "../css/SignIn.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useHistory } from "react-router-dom";

function SignIn() {
  
    const history = useHistory();

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
      console.log(data);
        history.push('/messenger');
    }   

  return (
    <div className="SignIn">
        <div className="WelcomeSignIn">
            <div className="WelcomeContainerSignIn">
                <div className="WelcomeTitleSignIn">
                    <h1>Text App</h1>
                </div>
                <div className="welcomeSubtitleSignIn">
                    <h2>Be modern.</h2>
                    <h2>Keep it simple.</h2>
                </div>
                <div className="welcomeParagraphSignIn">
                    <p>
                        With TextApp, messaging is simple, fast and secure. Do not set
                        limits to advance. Communicate!
                    </p>
                </div>
                <div className="WelcomeSignInSignUp">
                    <h4>Don't have an account?</h4>
                    {/* TODO: Cambiar por Linkm enviuará al formulario de registro. */}
                    <Link  to="/signup" className="link">Get started!</Link>
                </div>
            </div>
        </div>
        <div className="SignInContent">
            <div className="SignInContainer">
                <div className="SignInMessage">
                    {errors.email && <li className="error">{errors.email.message}</li>}
                    {errors.password && <li className="error">{errors.password.message}</li>}
                </div>
                <div className="SignInTitle">
                    <h2>Account Login</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="SignInForm">
                    <div>
                    <label>Email address</label>    
                    <input
                        type="email"
                        {...register("email", { required: "Email is a required" })}
                    />
                    </div>
                    <div>
                    <label>
                        <span>Password</span>
                        <span className="forgotPassword">Forgot Password?</span>
                    </label>
                    <input
                        type="password"
                        {...register("password", {
                        required: "Password is a required",
                        })}
                    />
                    </div>

                    <input type="submit" value="Log In" />
                </form>
            <div className="SignInGoogle">
                <div className="GoogleLabel">
                <div className="Left">
                    <div className="line"></div>
                </div>
                <div className="SingWithGoogle">
                    <p>or log in with</p>
                </div>
                <div className="Right">
                    <div className="line"></div>
                </div>
                </div>
                <div className="GoogleButton">
                <div className="google">
                    <FontAwesomeIcon icon={faGoogle} />
                    <span>Google</span>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default SignIn;
