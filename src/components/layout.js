import * as React from 'react'
import { Link, /* useStaticQuery, graphql */ } from 'gatsby'
import {
   container,
   heading,
   navLinks,
   navLinkItem,
   navLinkText,
} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
   /*
   const data = useStaticQuery(graphql`
	query {
      site {
         siteMetadata {
            logo
         }
      }
   } 
	`)
   */
	return (
      <div className = { container }>
         <StaticImage 
            src = "../images/techfluentlogo.png"
            height = "70"
         />
         <center>
			<nav>
            <ul className = { navLinks }>
               <li className = { navLinkItem }>
                  <Link to = "/" className = { navLinkText }>
                     Home
                  </Link>
               </li>
               <li className = { navLinkItem }>
                  <Link to = "/about" className = { navLinkText }>
                     About
                  </Link>
               </li>
					<li className = { navLinkItem }>
						<Link to = "/blog" className = { navLinkText }>
							Blog
						</Link>
					</li>
            </ul>
         </nav>
         </center>
         <main>
            <center><h1 className = { heading }>{ pageTitle }</h1></center>
            { children }
         </main>
      </div>
   )
}

export default Layout