export type PostFrontmatterType = {
  title: string
  date: string
  category: string
  summary: string
}

export type PostListItemType = {
  node: {
    id: string
    frontmatter: PostFrontmatterType
  }
}
