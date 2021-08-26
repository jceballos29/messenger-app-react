import React from "react";
import "../css/SignUp.css";
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useHistory, Link } from "react-router-dom";

function SignUp() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        console.log(data);
        history.push('/signin')
    }

  return (
    <div className="SignUp">
        <div className="WelcomeSignUp">
            <div className="WelcomeContainerSignUp">
                <div className="WelcomeTitleSignUp">
                    <h1>Text App</h1>
                </div>
                <div className="welcomeSubtitleSignUp">
                    <h2>Be modern.</h2>
                    <h2>Keep it simple.</h2>
                </div>
                <div className="welcomeParagraphSignUp">
                    <p>
                        With TextApp, messaging is simple, fast and secure. Do not set
                        limits to advance. Communicate!
                    </p>
                </div>
                <div className="WelcomeSignUpSignIn">
                    <h4>Have an account?</h4>
                    {/* TODO: Cambiar por Linkm enviuará al formulario de registro. */}
                    <Link  to="/signin" className="linkSignUp">Log in</Link>
                </div>
            </div>
        </div>
        <div className="SignUpContent">
            <div className="SignUpContainer">
                <div className="SignUpTitle">
                    <h2>Register</h2>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="SignUpForm">
                    <div>
                        <label>
                            <span>Profile Image</span>
                            {errors.image && <span className="error">{errors.image.message}</span>}
                            </label>
                        <input type="file" {...register("image")} />
                    </div>
                    <div>
                        <label>
                            <span>Name</span>
                            {errors.name && <span className="error">{errors.name.message}</span>}
                            </label>
                        <input type="text" {...register("name", {required: "this field is required"})} />
                    </div>

                    <div>
                        <label>
                            <span>Email address</span>
                            {errors.email && <span className="error">{errors.email.message}</span>}
                        </label>
                        <input type="email"  {...register("email", {required: "this field is required"})} />
                    </div>
                    <div>
                        <label>
                            <span>Password</span>
                            {errors.password && <span className="error">{errors.password.message}</span>}
                        </label>
                        <input type="password"  {...register("password", {required: "this field is required"})} />
                    </div>
                    <div>
                        <label>
                            <span>Confirm Password</span>
                            {errors.confirm_pass && <span className="error">{errors.confirm_pass.message}</span>}
                        </label>
                        <input type="password"  {...register("confirm_pass", {required: "this field is required"})} />
                    </div>

                    <input type="submit" value="Register"/>
                </form>
                
                <div className="SignUpGoogle">
                    <div className="GoogleLabel">
                    <div className="Left">
                        <div className="line"></div>
                    </div>
                    <div className="SingWithGoogle">
                        <p>or register with</p>
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

export default SignUp;
