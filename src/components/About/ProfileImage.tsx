import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const PROFILE_IMAGE_LINK = `https://user-images.githubusercontent.com/65811799/154079461-bb5cd4f0-ef14-45eb-bfb2-79f6d3ed7435.jpg`

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 180px;
  border-radius: 10px;
  margin-right: 10px;
`

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage
