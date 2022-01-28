import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Header from 'components/Common/Header'
import Footer from '../components/Common/Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Footer />
    </Container>
  )
}

export default IndexPage
