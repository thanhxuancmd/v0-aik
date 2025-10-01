// Compatibility exports for legacy code
// These are no longer used but kept to prevent build errors

export const GeneralEvents = {
  _id: true,
  _title: true,
  _slug: true,
}

export const headingFragment = {
  _id: true,
  level: true,
  text: true,
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
  name: true,
  avatar: {
    url: true,
    alt: true,
  },
}

export const darkLightImageFragment = {
  dark: {
    url: true,
    alt: true,
    width: true,
    height: true,
  },
  light: {
    url: true,
    alt: true,
    width: true,
    height: true,
  },
}

export const optimizedImageFragment = {
  url: true,
  alt: true,
  width: true,
  height: true,
}
