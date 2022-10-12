import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { Link } from 'gatsby'

const IndexPage = () => {
   return (
      <Layout pageTitle = "Home">
         <p>Welcome to the Official Techfluent website! Here we strive to helping students who are unrepresented or disadvangted in their communities who are interested in the tech industry get the resources and passion to become the next generation of thinkers and problem-solvers.</p>
         <center>
            <StaticImage alt = "The Official Techfluent logo" src = "../images/techfluentlogo.png" />
         </center>
         <p>Currently we don't have anything open yet, but please stay tuned in our blog page as we will be updating on what is to come!</p>
         <footer>
            <h3>Follow us on Social Media!</h3>
            <p>
               Facebook: <Link to = "https://www.facebook.com/profile.php?id=100086269827506">Techfluent</Link>
               <br />
               Instagram: <Link to = "https://instagram.com/techfluente">@techfluent</Link>
            </p>
         </footer>
      </Layout>
   )
}

export const Head = () => <Seo title = "Home Page" />

export default IndexPage