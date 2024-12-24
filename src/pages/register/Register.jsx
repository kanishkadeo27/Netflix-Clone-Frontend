import { useRef, useState } from 'react'
import './register.scss'

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }
    const handleFinish =()=>{
        setPassword(passwordRef.current.value);
    }
    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">

                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="netflix-logo" className='logo' />
                    <button className='loginButton'>Sign In</button>
                </div>
            </div>

            <div className="container">
                <h1>Unlimited movies , tv shows and more....</h1>
                <h2>watch anywhere cancel anytime</h2>
                <p>ready to watch? enter your email to create or restart your membership</p>
                {
                    !email ? (
                        <div className="input">
                            <input type='email' placeholder='email address' className='inputfield' ref={emailRef} />
                            <button className="registerButton" onClick={handleStart}>Get Started!</button>
                        </div>) : (<form className="input">
                            <input type='password' placeholder='password' className='inputfield' ref={passwordRef} />
                            <button className="registerButton" onClick={handleFinish}>Start</button>
                        </form>
                    )
                }

            </div>
        </div>
    )
}

export default Register