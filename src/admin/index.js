import React from 'react'
import { Router } from '@reach/router'
import Home from '../components/home'
import User from '../components/user'

const Admin = (props) => {
    const { netlifyAdminStatus } = props;
    
    function logout() {
        props.netlifyLogout();
        window.location.reload();
    }
    
    return (
        <div style = {{ textAlign: 'center', marginTop: '100px' }}>
            <button onClick = { logout }>Logout</button>
            <Router>
                <Home path = "/admin" netlifyAdminStatus = { netlifyAdminStatus } />
                <User path = "/admin/user/:id" />
            </Router>
        </div>
    )
}

export default Admin