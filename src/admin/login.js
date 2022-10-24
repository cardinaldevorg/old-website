import React from 'react'
import { navigate } from 'gatsby'

const Login = (props) => {
    if (props.netifyAdminStatus && props.netifyAdminStatus.isLoggedIn) {
        navigate('/admin')
        return null
    }

    return (
        <div style = {{ textAlign: 'center', marginTop: '100px' }}>
            <button style = {{ fontSize: '100px', lineHeight: '1.2' }} onClick = { props.netifyLogin }>Login</button>
        </div>
    )
}

export default Login