// BaseHub GraphQL fragments for content management
export const GeneralEvents = `
  fragment GeneralEvents on GeneralEvents {
    _id
    _title
    _slug
    date
    description
    location
  }
`

export const headingFragment = `
  fragment HeadingFragment on Heading {
    _id
    _title
    level
    content
  }
`

export const buttonFragment = `
  fragment ButtonFragment on Button {
    _id
    _title
    text
    href
    variant
    size
  }
`

export const quoteFragment = `
  fragment QuoteFragment on Quote {
    _id
    _title
    content
    author
    role
  }
`

export const authorFragment = `
  fragment AuthorFragment on Author {
    _id
    _title
    name
    bio
    avatar {
      url
      alt
    }
  }
`

export const darkLightImageFragment = `
  fragment DarkLightImageFragment on DarkLightImage {
    _id
    _title
    lightImage {
      url
      alt
      width
      height
    }
    darkImage {
      url
      alt
      width
      height
    }
  }
`

export const optimizedImageFragment = `
  fragment OptimizedImageFragment on OptimizedImage {
    _id
    _title
    url
    alt
    width
    height
    blurDataURL
  }
`
