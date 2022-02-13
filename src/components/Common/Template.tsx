import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Header from 'components/Common/Header'
import Footer from 'components/Common/Footer'

type TemplateProps = {
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
  children,
  toggleMenu,
  isOpen,
}) {
  return (
    <Container>
      <GlobalStyle />
      <Header toggleMenu={toggleMenu} isOpen={isOpen} />
      {children}
      <Footer />
    </Container>
  )
}

export default Template
