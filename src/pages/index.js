import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello!</h1>
      <h2>I'm SaiChandra, a full-stack developer living in Hyderabad</h2>
      <p>
        Need a developer? <Link to="/contact">contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
