import { Heading } from "../../../common/heading"
import { Section } from "../../../common/section-wrapper"
import { TestimonialsGridClient } from "./testimonials-list"

interface TestimonialsGridProps {
  heading: {
    title: string
    subtitle?: string
    align?: "left" | "center" | "right"
  }
  quotes: Array<{
    _id: string
    quote: string
    author: {
      _id: string
      _title: string
      role?: string
      company?: { _title: string }
      image: {
        url: string
        alt?: string
        width: number
        height: number
      }
    }
    company?: string
    rating?: number
  }>
}

export function TestimonialsGrid({ heading, quotes }: TestimonialsGridProps) {
  return (
    <Section>
      <Heading {...heading}>
        <h4>{heading.title}</h4>
      </Heading>
      <TestimonialsGridClient quotes={quotes} />
    </Section>
  )
}
