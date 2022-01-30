import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Body/PostItem'

const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2022. 01. 29',
  category: 'Web',
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  link: '<https://www.google.co.kr/>',
}

const PostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
`

const PostList: FunctionComponent = function () {
  return (
    <PostListWrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </PostListWrapper>
  )
}

export default PostList
