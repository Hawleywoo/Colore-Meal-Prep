import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const { signUp } = useAuth()

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to Sign up')
        }
        setLoading(false)
    }

    return (
        <div>
            <h2>Sign Up</h2>
            {error && <h3>{error}</h3>}
            <form  onSubmit={handleSubmit}>
                <label>Username:</label>
                <input ref={emailRef} required/>
                <label>Password:</label>
                <input ref={passwordRef} required/>
                <label> Confirm Password:</label>
                <input ref={passwordConfirmRef} required/>
                <input disabled={loading} type="submit" placeholder="Sign Up"/>
            </form>
            <div>Already have an account? <Link to="/login" >Login</Link> </div>
        </div>
    )
}

export default SignUp
