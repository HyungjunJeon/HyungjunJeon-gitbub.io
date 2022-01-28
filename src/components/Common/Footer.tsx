import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  padding: 25px 0;
  line-height: 1.5;
`

const FooterText = styled.p`
  font-size: 15px;
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      <FooterText>
        Thank You for Visiting My Blog, Have a Good Day 😆
      </FooterText>
      <FooterText>© 2022 Developer Hyungjun, Powered By Gatsby.</FooterText>
    </FooterWrapper>
  )
}

export default Footer
