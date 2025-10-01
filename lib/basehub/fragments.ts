// Stub fragments for compatibility with legacy code that imports from this file
// BaseHub is no longer used in the project

export const GeneralEvents = {
  ingestKey: "stub-ingest-key",
}

export const headingFragment = {
  _id: true,
  _title: true,
  subtitle: true,
}

export const buttonFragment = {
  _id: true,
  label: true,
  href: true,
  variant: true,
}

export const quoteFragment = {
  _id: true,
  text: true,
  author: true,
}

export const authorFragment = {
  _id: true,
  _title: true,
  image: {
    url: true,
    alt: true,
  },
}

export const darkLightImageFragment = {
  light: {
    url: true,
    alt: true,
    aspectRatio: true,
  },
  dark: {
    url: true,
    alt: true,
    aspectRatio: true,
  },
}

export const optimizedImageFragment = {
  url: true,
  alt: true,
  width: true,
  height: true,
  blurDataURL: true,
}
