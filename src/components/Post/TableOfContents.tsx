import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

export type TableOfContentsProps = {
  tableOfContents: string
  isOpen: boolean
}

const TocContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 150px;
  right: 150px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    top: 96px;
    right: ${({ isOpen }) => (isOpen ? '0%' : '-100%')};
    background: #ffffff;
    padding: 20px;
    transition: all ease-in 0.3s;
  }
`

const Toc = styled.div`
  width: 100%;
  height: 100%;
`

const TableOfContents: FunctionComponent<TableOfContentsProps> = function ({
  tableOfContents,
  isOpen,
}) {
  return (
    <TocContainer isOpen={isOpen}>
      <Toc dangerouslySetInnerHTML={{ __html: tableOfContents }}></Toc>
    </TocContainer>
  )
}

export default TableOfContents
