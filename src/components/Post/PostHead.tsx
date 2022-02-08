import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostHeadInfo, { PostHeadInfoProps } from './PostHeadInfo'

type PostHeadProps = PostHeadInfoProps

const PostHeadWrapper = styled.div`
  positon: relative;
  width: 100%;
  height: 400px;
`

const PostHead: FunctionComponent<PostHeadProps> = function ({
  title,
  date,
  categories,
}) {
  return (
    <PostHeadWrapper>
      <PostHeadInfo title={title} date={date} categories={categories} />
    </PostHeadWrapper>
  )
}

export default PostHead
