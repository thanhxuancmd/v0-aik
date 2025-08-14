import { Heading } from "../../../../common/heading"
import { Section } from "../../../../common/section-wrapper"

interface BigFeatureProps {
  featuresBigImageList: {
    items: Array<{
      _title: string
      description: string
      icon: {
        alt: string
        url: string
      }
    }>
  }
  heading: {
    title: string
    subtitle?: string
    align?: "left" | "center" | "right"
  }
  image: {
    light: { url: string; alt: string; width: number; height: number; aspectRatio: number }
    dark: { url: string; alt: string; width: number; height: number; aspectRatio: number }
  }
}

export function BigFeature({ featuresBigImageList, heading, image }: BigFeatureProps) {
  return (
    <Section container="default">
      <img
        src={image.light.url || "/placeholder.svg"}
        alt={image.light.alt}
        height={600}
        width={1216}
        className="block rounded-xl border border-border dark:border-dark-border md:order-3 md:w-full"
      />
      <Heading {...heading}>
        <h4>{heading.title}</h4>
      </Heading>
      <div className="flex w-full flex-col items-start gap-4 md:order-2 md:grid md:grid-cols-3 md:gap-16">
        {featuresBigImageList.items.map(({ _title, description, icon }) => (
          <article key={_title} className="flex flex-col gap-4">
            <figure className="flex size-9 items-center justify-center rounded-full border border-border bg-secondary p-2 dark:border-dark-border dark:bg-dark-secondary">
              <img
                src={icon.url || "/placeholder.svg"}
                alt={icon.alt ?? _title}
                className="dark:invert"
                height={18}
                width={18}
              />
            </figure>
            <div className="flex flex-col items-start gap-1">
              <h5 className="text-lg font-medium">{_title}</h5>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
