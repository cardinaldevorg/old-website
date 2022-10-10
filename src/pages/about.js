import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle = "About">
			<center>
      <h2>
				"Our goal is to help the unhelped to becoming people with the feeling of confidence and passion to learn and discover the world they can shape." 
			</h2>
      <StaticImage
        src = "../images/techfluentlogo2.png"
        alt = "The Official secondary Techfluent logo"
      />
      </center>
      <p>
        Techfluent was founder by a high school sophomore named Sami Elsayed who has a huge interest in coding, building computers, and helping others for the common good. Techfluent first went public on October 30, 2022, with only Elsayed working on the project.
      </p>
      <center>
      <h3>
        Our Vision
      </h3>
      </center>
      <p>
        We have a clear vision: to help kids and even young adults to become better inovators and critical thinkers. We believe that the power of tech can creativly shape the lives of many people.
      </p>
      <center>
      <h3>
        Our Values
      </h3>
      </center>
      <p>
        At Techfluent, we make sure that 
      </p>
    </Layout>
  )
}

export const Head = () => <title>About</title>

export default AboutPage