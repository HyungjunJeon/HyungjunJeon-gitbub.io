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
  location: {
    href: string
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
  location: { href },
}) {
  const {
    node: {
      html,
      tableOfContents,
      frontmatter: { title, summary, date, categories },
    },
  } = edges[0]

  const [isOpen, setMenu] = useState<boolean>(false)
  const toggleMenu = () => {
    setMenu(!isOpen)
  }

  return (
    <Template
      title={title}
      description={summary}
      url={href}
      toggleMenu={toggleMenu}
      isOpen={isOpen}
    >
      <PostPageWrapper>
        <PostHead title={title} date={date} categories={categories} />
        <PostContent html={html} />
        <CommentWidget />
      </PostPageWrapper>
      <TableOfContents tableOfContents={tableOfContents} isOpen={isOpen} />
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
