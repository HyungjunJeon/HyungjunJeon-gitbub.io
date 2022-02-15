import Template from 'components/Common/Template'
import React, { FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'
import ProfileImage from 'components/About/ProfileImage'

const AboutPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 60px 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }
`

const AboutHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px auto;
  padding: 0 calc((100% - 500px) / 2);

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 calc((100% - 300px) / 2);
  }
`

const AboutTitle = styled.h1`
  font-size: 35px;
  font-weight: 800;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const AboutContent = styled.div`
  margin-top: 20px;
  font-size: 25px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 15px;
    font-weight: 400;
  }
`

const AboutPage: FunctionComponent = function () {
  const [isOpen, setMenu] = useState<boolean>(false)
  const toggleMenu = () => {
    setMenu(!isOpen)
  }

  return (
    <Template toggleMenu={toggleMenu} isOpen={isOpen}>
      <AboutPageWrapper>
        <AboutHead>
          <ProfileImage />
          <AboutTitle>
            안녕하세요
            <br /> 프론트엔드 개발자
            <br /> 전형준입니다
          </AboutTitle>
        </AboutHead>
        <AboutContent>
          개발 공부 및 프로젝트를 하며 알게된 것들을 정리해놓는 것이 큰 도움이
          될 것이라고 생각하여 블로그를 만들게 되었습니다.
        </AboutContent>
        <AboutContent>
          새롭게 배우게 된 것들, 기존에 알고 있었지만 다시 한번 정리해보면 좋을
          것들, 교육을 통해 배운 것들, 프로젝트 경험들에 대해 포스팅할
          예정입니다.
        </AboutContent>
        <AboutContent>
          블로그에 남기는 포스팅이 저의 성장에 밑거름이 되고 또한 다른
          누군가에게 도움이 되기를 바랍니다.
        </AboutContent>
        <AboutContent>
          혹시 포스팅 내용 중 잘못된 정보가 있다면 알려주시면 감사드리겠습니다.
        </AboutContent>
      </AboutPageWrapper>
    </Template>
  )
}

export default AboutPage
