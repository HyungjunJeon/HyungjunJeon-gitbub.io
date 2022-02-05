import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Body/PostItem'
import { PostListItemType } from 'types/PostItem.types'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
`

const PostList: FunctionComponent<PostListProps> = function ({
  selectedCategory,
  posts,
}) {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem
          {...frontmatter}
          link="<https://www.google.co.kr/>"
          key={id}
        />
      ))}
    </PostListWrapper>
  )
}

export default PostList
