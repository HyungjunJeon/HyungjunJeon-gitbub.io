import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  line-height: 3;
  border-bottom: 1px solid #eaecef;
`
const HeaderNavWrapper = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`

const Header: FunctionComponent = function () {
  return (
    <HeaderWrapper>
      <Link to="/">JHJ Blog</Link>
      <HeaderNavWrapper>
        <Link to="/">About</Link>
        <Link
          to="https://github.com/HyungjunJeon/HyungjunJeon-gitbub.io"
          target="_blank"
        >
          Repository
        </Link>
      </HeaderNavWrapper>
    </HeaderWrapper>
  )
}

export default Header
