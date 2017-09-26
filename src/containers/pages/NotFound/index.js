import React from 'react'
import Helmet from 'react-helmet'
import ScrollTopOnMount from 'Components/ScrollTopOnMount'

import css from './styles.css'

export default function NotFound() {
  return (
    <main className={css.notfound}>
      <ScrollTopOnMount />
      <Helmet title="Page not found - 404" />
      <h2>Page not found - 404</h2>
    </main>
  )
}
