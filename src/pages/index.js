import React from "react"
// import Navigation from '../components/Navigation'
import Sections from '../components/Sections'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex flex-col sm:flex-row">
      {/* <Navigation /> */}
      <Sections />
    </div>
  </Layout>
)

export default IndexPage
