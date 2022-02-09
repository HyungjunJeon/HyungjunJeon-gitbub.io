import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  line-height: 3;
  border-bottom: 1px solid #eaecef;
`
const HeaderNavWrapper = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
`
const HeaderLink = styled(Link)`
  font-weight: 600;
  color: #2c3e50;
`

const ExternalLinkIcon = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  color: #aaa;
  margin-left: 10px;
`

const Header: FunctionComponent = function () {
  return (
    <HeaderWrapper>
      <HeaderLink to="/">JHJ Blog</HeaderLink>
      <HeaderNavWrapper>
        <HeaderLink to="/">About</HeaderLink>
        <HeaderLink
          to="https://github.com/HyungjunJeon/HyungjunJeon-gitbub.io"
          target="_blank"
        >
          Repository
          <ExternalLinkIcon>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </ExternalLinkIcon>
        </HeaderLink>
      </HeaderNavWrapper>
    </HeaderWrapper>
  )
}

export default Header
