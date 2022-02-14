import Template from 'components/Common/Template'
import React, { FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'

const AboutPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 60px 0;
`

const Title = styled.h1`
  font-size: 25px;
  font-weight: 800;
`

const AboutData = styled.div`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
`

const AboutPage: FunctionComponent = function () {
  const [isOpen, setMenu] = useState<boolean>(false)
  const toggleMenu = () => {
    setMenu(!isOpen)
  }

  return (
    <Template toggleMenu={toggleMenu} isOpen={isOpen}>
      <AboutPageWrapper>
        <Title>제 블로그에 방문해주셔서 감사합니다.</Title>
        <AboutData>
          <p>안녕하세요. 프론트엔드 개발자 전형준입니다.</p>
          <p>
            개발 공부 및 프로젝트를 하며 알게된 것들을 정리해놓는 것이 큰 도움이
            될 것이라고 생각하여 블로그를 만들게 되었습니다.
          </p>
          <p>
            새롭게 배우게 된 것들, 기존에 알고 있었지만 다시 한번 정리해보면
            좋을 것들, 교육을 통해 배운 것들, 프로젝트 경험들에 대해 포스팅할
            예정입니다.
          </p>
          <p>
            블로그에 남기는 포스팅이 저의 성장에 밑거름이 되고 또한 다른
            누군가에게 도움이 되기를 바랍니다.
          </p>
          <p>
            혹시 포스팅 내용 중 잘못된 정보가 있다면 알려주시면
            감사드리겠습니다.
          </p>
        </AboutData>
      </AboutPageWrapper>
    </Template>
  )
}

export default AboutPage
