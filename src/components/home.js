import React from 'react'
import { Link } from 'gatsby'

const Home = ({ netlifyAdminStatus }) => (
    <main>
        <h1>Admin page</h1>
        <p>Hi User <b>{ netlifyAdminStatus ? netlifyAdminStatus.user.email : '' }</b></p>
        <p>Only you and other admin users can see this page!</p>
        <hr />
        <h3>Important links:</h3>
    </main>
)

export default Home