import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Site from '../Site/Site'
import Header from '../Header/Header'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'
import Router from '../../Router'

const Layout = ({ children }) => (
  <Site>
    <Helmet
      title="bulma react template"
      meta={[
        { name: 'description', content: 'bulma/react website' },
        { name: 'keywords', content: 'bulma react' },
      ]}
      script={[
        { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
      ]}
      link={[
        {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
      ]}
    />
    <Header />
    <Content>
    <Router />
    </Content>
    <Footer />
  </Site>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout