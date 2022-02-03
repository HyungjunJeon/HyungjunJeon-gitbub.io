import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { PostFrontmatterType } from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType & { link: string }

const PostItemWrapper = styled(Link)`
  border-radius: 10px;
  cursor: pointer;
`

const PostItemContent = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
  padding: 10px;
  margin-bottom: 20px;
`
const Title = styled.h2`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 700;
`

const Summary = styled.p`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
`

const DateAndCategory = styled.div`
  display: flex;
  justify-content: space-between;
`

const Date = styled.span`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
`

const Category = styled.span`
  margin: 2.5px 0px;
  font-size: 14px;
  font-weight: 700;
`

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  link,
}) {
  return (
    <PostItemWrapper to={link}>
      <PostItemContent>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        <DateAndCategory>
          <Category>{categories}</Category>
          <Date>{date}</Date>
        </DateAndCategory>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem
