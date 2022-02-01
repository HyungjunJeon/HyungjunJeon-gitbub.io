import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Body/PostItem'
import { PostListItemType } from 'types/PostItem.types'

type PostListProps = {
  posts: PostListItemType[]
}

const PostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
`

const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
  return (
    <PostListWrapper>
      {posts.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </PostListWrapper>
  )
}

export default PostList
