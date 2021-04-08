import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import MyOrders from './MyOrders'

function Dashboard() {
    const [error, setError] = useState('')
    const history = useHistory()
    const { logOut, currentUser } = useAuth()

    const handleLogOut = async () => {
        setError('')

        try{
            await logOut()
            history.push('/login')
        } catch {
            setError('Failed to Log Out')
        }
    }
    return (
        <div className="dashboard">
            <h2>Profile</h2>
            <h3><strong>Email: </strong>{currentUser.email}</h3>
            <Link to='/update-profile'>Update Profile</Link>
            {error && <h3>{error}</h3>}
            <MyOrders />
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default Dashboard
