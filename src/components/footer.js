import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const author = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <p>Created by {author.site.siteMetadata.author}, copyRight: 2019</p>
    </footer>
  )
}

export default Footer
