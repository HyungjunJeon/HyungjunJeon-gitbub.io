import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Header from 'components/Common/Header'
import Footer from 'components/Common/Footer'
import { Helmet } from 'react-helmet'

type TemplateProps = {
  title: string
  description: string
  url: string
  children: ReactNode
  toggleMenu: () => void
  isOpen: boolean
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  children,
  toggleMenu,
  isOpen,
}) {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="Hyungjun" />
        <meta name="twitter:creator" content="Hyungjun" />
      </Helmet>
      <GlobalStyle />
      <Header toggleMenu={toggleMenu} isOpen={isOpen} />
      {children}
      <Footer />
    </Container>
  )
}

export default Template
