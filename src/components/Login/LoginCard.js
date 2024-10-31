// This is the login card component for the login page

import React, { useRef, useState } from 'react'
import login_card_styles from './LoginCard.module.css'
import { useNavigate } from 'react-router-dom'

export default function LoginCard(props) {

    const navigate = useNavigate()

    // State declarations for email and password
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Reference for the password input, to change it to and from type text/password
    const passwordRef = useRef(null)

    // The following functions handle changing the values for email and password respectively
    const ChangeEmailValue = (e) => {
        setEmail(e.target.value)
    }

    const ChangePasswordValue = (e) => {
        setPassword(e.target.value)
    }

    //This function handles the form submit and stops the default action
    const onFormSubmit = (e) => {
        e.preventDefault()
        if (email === "demo@fakecompany.com" && password === "P31L$R1o") {
            navigate('/dashboard')
        }
    }

    return (

        // Login card container
        <div className={login_card_styles.__login_card_container}>

            {/* Login card */}
            <div className={login_card_styles.__login_card}>
                {/* Logo Container */}
                <div className={login_card_styles.__login_card_logo_container}>
                    <img src='/managexasset.png' alt="ManageXAsset Logo" />
                </div>
                {/* Header container */}
                <div className={login_card_styles.__login_card_header_container}>
                    <h1 className='baskerville'>ManagexAsset</h1>
                </div>
                {/* Form container */}
                <div className={login_card_styles.__login_card_form_container}>
                    <form className={login_card_styles.__login_form} onSubmit={onFormSubmit}>
                        {/* Email input group */}
                        <div className={login_card_styles.__login_form_input_group}>
                            <label htmlFor="Email" className='roboto-regular'>Email</label>
                            <input id="Email" value={email} type='text' onChange={ChangeEmailValue} />
                        </div>
                        {/* Password input group */}
                        <div className={login_card_styles.__login_form_input_group}>
                            <label htmlFor="Password" className='roboto-regular'>Password</label>
                            <input id="Password" ref={passwordRef} value={password} type='password' onChange={ChangePasswordValue} />
                        </div>
                        {/* Submit and forgot password */}
                        <div className={login_card_styles.__login_form_buttons}>
                            <button type='submit'>Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
