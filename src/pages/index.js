import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <h2>I'm SaiChandra, a full-stack developer living in Hyderabad</h2>
      <p>
        Need a developer? <Link to="/contact">contact me</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
