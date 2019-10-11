import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <div>
      <h1>About page</h1>
      <p>I know reactjs</p>
      <p>
        <Link to="/contact">Reach out to me</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
