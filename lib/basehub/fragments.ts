// Stub fragments for compatibility with legacy code
// BaseHub is no longer used

export const GeneralEvents = {
  ingestKey: true,
}

export const headingFragment = {
  _id: true,
  _title: true,
  subtitle: true,
  align: true,
}

export const buttonFragment = {
  _id: true,
  _title: true,
  href: true,
  variant: true,
  size: true,
}

export const quoteFragment = {
  _id: true,
  quote: true,
  author: true,
}

export const authorFragment = {
  _id: true,
  _title: true,
  image: {
    url: true,
    alt: true,
    width: true,
    height: true,
  },
}

export const darkLightImageFragment = {
  light: {
    url: true,
    alt: true,
    width: true,
    height: true,
    aspectRatio: true,
  },
  dark: {
    url: true,
    alt: true,
    width: true,
    height: true,
    aspectRatio: true,
  },
}

export const optimizedImageFragment = {
  url: true,
  alt: true,
  width: true,
  height: true,
  aspectRatio: true,
  blurDataURL: true,
}
