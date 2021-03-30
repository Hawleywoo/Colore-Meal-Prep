import React, { useState, useRef } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const { currentUser } = useAuth()

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            // await signUp(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to Sign up')
        }
        setLoading(false)
    }

    return (
        <div>
            <h2>Update Profile</h2>
            {error && <h3>{error}</h3>}
            <form  onSubmit={handleSubmit}>
                <label>Username:</label>
                <input ref={emailRef} defaultValue={currentUser.email} required/>
                <label>Password:</label>
                <input ref={passwordRef} placeholder="Leave blank to keep the same" required/>
                <label> Confirm Password:</label>
                <input ref={passwordConfirmRef} placeholder="Leave blank to keep the same" required/>
                <input disabled={loading} type="submit" placeholder="Update"/>
            </form>
            <div><Link to="/" >Cancel</Link> </div>
        </div>
    )
}

export default UpdateProfile
