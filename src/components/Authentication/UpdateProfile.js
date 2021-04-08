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
    const { currentUser, updatePassword, updateEmail } = useAuth()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        setError('')

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises = []

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
            .then(()=> {
                history.push('/')
            }).catch(()=> {
                setError('Failed to update account')
            }).finally(()=> {
                setLoading(false)
            })
    }

    return (
        <div>
            <h2>Update Profile</h2>
            {error && <h3>{error}</h3>}
            <form  onSubmit={handleSubmit}>
                <label>Username:</label>
                <input ref={emailRef} defaultValue={currentUser.email} required/>
                <label>Password:</label>
                <input ref={passwordRef} placeholder="Leave blank to keep the same"/>
                <label> Confirm Password:</label>
                <input ref={passwordConfirmRef} placeholder="Leave blank to keep the same" />
                <input disabled={loading} type="submit" placeholder="Update"/>
            </form>
            <div><Link to="/" >Cancel</Link> </div>
        </div>
    )
}

export default UpdateProfile
