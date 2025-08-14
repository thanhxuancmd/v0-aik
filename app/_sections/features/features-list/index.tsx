import { CheckIcon } from "@radix-ui/react-icons"
import { Section } from "../../../../common/section-wrapper"
import { Heading } from "../../../../common/heading"

interface FeatureCardProps {
  _title: string
  description: string
  image: {
    light: { url: string; alt: string; width: number; height: number; aspectRatio: number }
    dark: { url: string; alt: string; width: number; height: number; aspectRatio: number }
  }
  characteristics: {
    items: Array<{ _title: string }>
  }
}

interface FeaturesListProps {
  heading: {
    subtitle?: string
    tag?: string
    title: string
  }
  featuresCardsList: {
    items: FeatureCardProps[]
  }
}

export function FeaturesList({ featuresCardsList, heading }: FeaturesListProps) {
  return (
    <Section container="default">
      <Heading subtitle={heading.subtitle} tag={heading.tag}>
        <h4>{heading.title}</h4>
      </Heading>
      <div className="flex flex-col gap-6">
        {featuresCardsList.items.map(({ image, ...item }) => (
          <article
            key={item._title}
            className="flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border bg-secondary p-px dark:border-dark-border dark:bg-dark-secondary sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16"
          >
            <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
              <img
                src={image.light.url || "/placeholder.svg"}
                alt={image.light.alt}
                className="block aspect-video h-[200px] w-full rounded-lg border border-border object-cover dark:border-dark-border md:h-full"
                height={374}
                width={560}
              />
            </figure>
            <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
              <div className="flex flex-col items-start gap-2">
                <h5 className="text-2xl font-medium text-foreground md:text-3xl">{item._title}</h5>
                <p className="font-normal text-muted-foreground md:text-lg">{item.description}</p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {item.characteristics.items.map(({ _title }) => (
                  <li key={_title} className="flex items-center gap-4 font-normal text-muted-foreground">
                    <span className="flex size-6 items-center justify-center rounded-full bg-muted">
                      <CheckIcon className="text-muted-foreground" />
                    </span>
                    {_title}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
