import React, { useState, useRef } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

function ForgotPassword() {
    const emailRef = useRef()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const { resetPassword } = useAuth()
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            setError('')
            setMessage('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instruction')
            history.push('/login')
        } catch {
            setError('Failed to Reset Password')
        }
        setLoading(false)
    }

    return (
        <div>
            <h2>Password reset</h2>
            {error && <h3>{error}</h3>}
            {message && <h3>{message}</h3>}
            <form  onSubmit={handleSubmit}>
                <label>Email:</label>
                <input ref={emailRef} required/>
                <input disabled={loading} type="submit" placeholder="Reset Passwordd"/>
            </form>
            <div><Link to="/login">login</Link></div>
            <div>Don't have an account? <Link to="/signup">Sign Up</Link></div>
        </div>
    )
}

export default ForgotPassword
