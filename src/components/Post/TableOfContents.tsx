import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

export type TableOfContentsProps = {
  tableOfContents: string
}

const TocContainer = styled.div`
  position: absolute;
  top: 150px;
  right: 150px;
`

const TocWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const TocContent = styled.div`
  width: 100%;
  height: 100%;
`

const Toc = styled.div`
  width: 100%;
  height: 100%;
`

const TableOfContents: FunctionComponent<TableOfContentsProps> = function ({
  tableOfContents,
}) {
  return (
    <TocContainer>
      <TocWrapper>
        <TocContent>
          <Toc dangerouslySetInnerHTML={{ __html: tableOfContents }}></Toc>
        </TocContent>
      </TocWrapper>
    </TocContainer>
  )
}

export default TableOfContents
