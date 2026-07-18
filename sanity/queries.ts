export const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    excerpt,
    publishedAt,
    readTime,
    mainImage,
    featured
  }
`

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    excerpt,
    publishedAt,
    readTime,
    mainImage,
    body
  }
`

export const teamMembersQuery = `
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    photo,
    linkedin
  }
`

export const jobListingsQuery = `
  *[_type == "jobListing" && active == true] | order(_createdAt asc) {
    _id,
    title,
    type,
    level
  }
`
