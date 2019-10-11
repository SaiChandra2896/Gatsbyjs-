import React from "react"

import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>
        call me at{" "}
        <a href="https://www.google.com" target="_blank">
          9177436073
        </a>
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
