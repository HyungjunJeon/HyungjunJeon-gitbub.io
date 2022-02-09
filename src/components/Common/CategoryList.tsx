import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

type CategoryItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

const CategoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 100%;
  overflow-y: auto;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #000000;

  &:: -webkit-scrollbar {
    display: none;
  }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;
`

const CategoryItemWord = styled.p`
  font-size: 20px;

  &:nth-child(2) {
    padding: 3px 7px;
    border-radius: 10px;
    background-color: #eee;
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          <CategoryItemWord>{name}</CategoryItemWord>
          <CategoryItemWord>{count}</CategoryItemWord>
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
