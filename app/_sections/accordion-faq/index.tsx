import type { Faq } from "../../_sections/faq"
import { Heading } from "../../../common/heading"
import { Section } from "../../../common/section-wrapper"
import { Accordion } from "./accordion"

export function AccordionFaq(faq: Faq & { eventsKey?: string }) {
  return (
    <Section>
      <Heading {...faq.heading}>
        <h4>{faq.heading.title}</h4>
      </Heading>
      <div className="!mx-auto flex w-full !max-w-screen-md gap-8 lg:gap-14 lg:px-24">
        <Accordion items={faq.questions.items} eventsKey={faq.eventsKey} />
      </div>
    </Section>
  )
}
