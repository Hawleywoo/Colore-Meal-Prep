import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()
    const history = useHistory()
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to Login')
        }
        setLoading(false)
    }

    return (
        <div>
            <h2>Login</h2>
            {error && <h3>{error}</h3>}
            <form  onSubmit={handleSubmit}>
                <label>Username:</label>
                <input ref={emailRef} required/>
                <label>Password:</label>
                <input ref={passwordRef} required/>
                <input disabled={loading} type="submit" placeholder="Login"/>
            </form>
            <div><Link to="/forgot-password"> Forgot Password</Link></div>
            <div>Don't have an account? <Link to="/signup">Sign Up</Link></div>
        </div>
    )
}

export default Login

