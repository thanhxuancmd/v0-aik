import { Heading } from "../../../common/heading"
import { Section } from "../../../common/section-wrapper"

interface FaqQuestion {
  _analyticsKey?: string
  _title: string
  answer: string
}

interface FaqHeading {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
}

export interface Faq {
  heading: FaqHeading
  questions: {
    items: FaqQuestion[]
  }
}

export function Faq(faq: Faq) {
  return (
    <Section>
      <Heading {...faq.heading}>
        <h4>{faq.heading.title}</h4>
      </Heading>
      <ul className="mx-auto flex w-full grid-cols-3 flex-col place-content-start items-start gap-8 self-stretch lg:grid lg:gap-14 lg:px-24">
        {faq.questions.items.map((question) => (
          <li key={question._title} className="flex flex-col gap-1.5">
            <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">{question._title}</p>
            <p className="text-sm leading-relaxed tracking-tight text-muted-foreground sm:text-base">
              {question.answer}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
