import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Header from 'components/Common/Header'
import Footer from 'components/Common/Footer'

type TemplateProps = {
  children: ReactNode
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const BodyWrapper = styled.div`
  display: flex;
  height: 100%;
`

const Template: FunctionComponent<TemplateProps> = function ({ children }) {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <BodyWrapper>{children}</BodyWrapper>
      <Footer />
    </Container>
  )
}

export default Template
