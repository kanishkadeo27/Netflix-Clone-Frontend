import { useRef, useState } from 'react'
import './login.scss'

const Login = () => {
    const [extraText, setExtraText] = useState(false);
    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="netflix-logo" className='logo' />
                </div>
            </div>

            <div className="container">
                <form className='signinform'>
                    <h1>Sign In</h1>
                    <input type='email' placeholder='Email or mobile number' />
                    <input type='password' placeholder='Password' />
                    <button className="loginBtn">
                        Sign In
                    </button>
                    <span className='orSpan'>OR</span>
                    <button className="codeBtn">Use a sign-in code</button>
                    <span className='forgotSpan'>Forgot password?</span>
                    <div className='checkboxdiv'>
                        <input type='checkbox' />
                        <span>Remember me</span>
                    </div>
                    <div className='signupdiv'>
                        <span>New to Netflix?</span>
                        <a href='#'>Sign up now.</a>
                    </div>
                    <p className='info'>This page is protected by Google reCAPTCHA to ensure you're not a bot
                        {!extraText && <a href='#' onClick={() => setExtraText(true)}>Learn more.</a>}
                        {extraText && <p>The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</p>}
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login