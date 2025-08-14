import { Section } from "../../../common/section-wrapper"
import { Heading } from "../../../common/heading"
import { Slider } from "./slider"

interface TestimonialsSliderProps {
  heading: {
    title: string
    subtitle?: string
    align?: "left" | "center" | "right" | "none"
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

export function Testimonials({ heading, quotes }: TestimonialsSliderProps) {
  return (
    <div className="relative overflow-clip">
      <Section>
        <Slider quotes={quotes}>
          {heading.align === "none" ? (
            <div />
          ) : (
            <Heading className="self-stretch" {...heading}>
              <h4>{heading.title}</h4>
            </Heading>
          )}
        </Slider>
      </Section>
    </div>
  )
}
