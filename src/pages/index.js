import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero/hero"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Hero/>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div>
      <Image />
    </div>
   
  </Layout>
)

export default IndexPage
