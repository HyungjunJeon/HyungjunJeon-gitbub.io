import React, { FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { PostPageItemType } from 'types/PostItem.types'
import Template from 'components/Common/Template'
import PostHead from 'components/Post/PostHead'
import PostContent from 'components/Post/PostContent'
import CommentWidget from 'components/Post/CommentWidget'
import TableOfContents from 'components/Post/TableOfContents'

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
  }
}

const PostPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const {
    node: { html, tableOfContents, frontmatter },
  } = edges[0]

  const [isOpen, setMenu] = useState<boolean>(false)
  const toggleMenu = () => {
    setMenu(!isOpen)
  }

  return (
    <Template toggleMenu={toggleMenu} isOpen={isOpen}>
      <PostPageWrapper>
        <PostHead {...frontmatter} />
        <PostContent html={html} />
        <CommentWidget />
      </PostPageWrapper>
      <TableOfContents tableOfContents={tableOfContents} />
    </Template>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          tableOfContents
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
          }
        }
      }
    }
  }
`
