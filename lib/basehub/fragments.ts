import { fragmentOn } from "basehub"

// Heading Fragment
export const headingFragment = fragmentOn("HeadingComponent", {
  _id: true,
  title: true,
  subtitle: true,
  align: true,
})

export type HeadingFragment = fragmentOn.infer<typeof headingFragment>

// Button Fragment
export const buttonFragment = fragmentOn("ButtonComponent", {
  _id: true,
  label: true,
  href: true,
  type: true,
  size: true,
})

export type ButtonFragment = fragmentOn.infer<typeof buttonFragment>

// Author Fragment
export const authorFragment = fragmentOn("AuthorComponent", {
  _id: true,
  _title: true,
  image: {
    url: true,
    alt: true,
    width: true,
    height: true,
  },
})

export type AuthorFragment = fragmentOn.infer<typeof authorFragment>

// Avatar Fragment
export const avatarFragment = fragmentOn("AvatarComponent", {
  _id: true,
  url: true,
  alt: true,
  width: true,
  height: true,
})

export type AvatarFragment = fragmentOn.infer<typeof avatarFragment>

// Dark Light Image Fragment
export const darkLightImageFragment = fragmentOn("DarkLightImageComponent", {
  _id: true,
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
})

export type DarkLightImageFragment = fragmentOn.infer<typeof darkLightImageFragment>

// Optimized Image Fragment
export const optimizedImageFragment = fragmentOn("OptimizedImageComponent", {
  _id: true,
  url: true,
  alt: true,
  width: true,
  height: true,
  aspectRatio: true,
})

export type OptimizedImageFragment = fragmentOn.infer<typeof optimizedImageFragment>

// Quote Fragment
export const quoteFragment = fragmentOn("QuoteComponent", {
  _id: true,
  quote: true,
  author: authorFragment,
  company: true,
  rating: true,
})

export type QuoteFragment = fragmentOn.infer<typeof quoteFragment>

// Header Fragment
export const headerFragment = fragmentOn("HeaderComponent", {
  _id: true,
  navbar: {
    items: {
      _id: true,
      _title: true,
      href: true,
      sublinks: {
        items: {
          _id: true,
          _title: true,
          link: {
            __typename: true,
            on_PageReferenceComponent: {
              page: {
                _title: true,
                pathname: true,
              },
            },
            on_LinkComponent: {
              text: true,
            },
          },
        },
      },
    },
  },
  rightCtas: {
    items: buttonFragment,
  },
})

export type HeaderFragment = fragmentOn.infer<typeof headerFragment>

// Header Links Fragment
export const headerLinksFragment = fragmentOn("HeaderLinksComponent", {
  _id: true,
  _title: true,
  href: true,
  sublinks: {
    items: {
      _id: true,
      _title: true,
      link: {
        __typename: true,
        on_PageReferenceComponent: {
          page: {
            _title: true,
            pathname: true,
          },
        },
        on_LinkComponent: {
          text: true,
        },
      },
    },
  },
})

export type HeaderLiksFragment = fragmentOn.infer<typeof headerLinksFragment>

// General Events Fragment
export const generalEventsFragment = fragmentOn("GeneralEventsComponent", {
  _id: true,
  ingestKey: true,
})

export type GeneralEvents = fragmentOn.infer<typeof generalEventsFragment>

// Export all fragments for convenience;
