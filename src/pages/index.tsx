import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Header from 'components/Common/Header'
import Footer from '../components/Common/Footer'
import CategoryList from 'components/Common/CategoryList'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
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

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <BodyWrapper>
        <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      </BodyWrapper>
      <Footer />
    </Container>
  )
}

export default IndexPage
