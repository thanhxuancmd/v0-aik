import { Heading } from "../../../../common/heading"
import { Section } from "../../../../common/section-wrapper"
import clsx from "clsx"
import { TrackedButtonLink } from "../../../../components/tracked-button"
import s from "./hero.module.css"

interface FeatureHeroProps {
  heading: {
    title: string
    subtitle?: string
    align?: "left" | "center" | "right"
  }
  heroLayout: "Image bottom" | "Image Right" | "full image" | "gradient"
  image: {
    light: { url: string; alt: string; width: number; height: number; aspectRatio: number }
    dark: { url: string; alt: string; width: number; height: number; aspectRatio: number }
  }
  actions: Array<{
    _id: string
    href: string
    label: string
    type: "primary" | "secondary"
  }>
  eventsKey?: string
}

export default function FeatureHero({ heading, heroLayout, image, actions, eventsKey }: FeatureHeroProps) {
  switch (heroLayout) {
    case "Image bottom": {
      return (
        <Section>
          <div className="flex flex-col gap-6">
            <Heading {...heading}>
              <h4>{heading.title}</h4>
            </Heading>
            <div className="flex justify-center gap-3">
              {actions?.map((action) => (
                <TrackedButtonLink
                  key={action._id}
                  analyticsKey={eventsKey}
                  href={action.href}
                  intent={action.type}
                  name="cta_click"
                  size="lg"
                >
                  {action.label}
                </TrackedButtonLink>
              ))}
            </div>
          </div>
          <img
            src={image.light.url || "/placeholder.svg"}
            alt={image.light.alt}
            className="block rounded-lg border border-border dark:border-dark-border"
            style={{ aspectRatio: image.light.aspectRatio }}
          />
        </Section>
      )
    }
    case "Image Right": {
      return (
        <Section>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="flex flex-1 flex-col gap-6 lg:pr-16">
              <Heading {...heading} align="left">
                <h4>{heading.title}</h4>
              </Heading>
              <div className="flex justify-start gap-3">
                {actions?.map((action) => (
                  <TrackedButtonLink
                    key={action._id}
                    analyticsKey={eventsKey}
                    href={action.href}
                    intent={action.type}
                    name="cta_click"
                    size="lg"
                  >
                    {action.label}
                  </TrackedButtonLink>
                ))}
              </div>
            </div>
            <img
              src={image.light.url || "/placeholder.svg"}
              alt={image.light.alt}
              className="block flex-1 rounded-lg border border-border dark:border-dark-border lg:w-1/2"
              style={{ aspectRatio: image.light.aspectRatio }}
            />
          </div>
        </Section>
      )
    }
    case "full image": {
      return (
        <>
          <img
            src={image.light.url || "/placeholder.svg"}
            alt={image.light.alt}
            className="block max-h-[720px] w-full border-y border-t-0 border-border object-cover dark:border-dark-border"
            style={{ aspectRatio: image.light.aspectRatio }}
          />
          <Section>
            <div className="flex items-center justify-between self-stretch">
              <Heading {...heading} align="left">
                <h4>{heading.title}</h4>
              </Heading>
              {actions && actions.length > 0 ? (
                <div className="flex gap-3">
                  {actions.map((action) => (
                    <TrackedButtonLink
                      key={action._id}
                      analyticsKey={eventsKey}
                      href={action.href}
                      intent={action.type}
                      name="cta_click"
                      size="lg"
                    >
                      {action.label}
                    </TrackedButtonLink>
                  ))}
                </div>
              ) : null}
            </div>
          </Section>
        </>
      )
    }
    case "gradient": {
      return (
        <Section>
          <div className="z-10 flex flex-col items-center gap-8">
            <LogoLite />
            <Heading {...heading}>
              <h4>{heading.title}</h4>
            </Heading>
            <div className="flex gap-3">
              {actions
                ? actions.map((action) => (
                    <TrackedButtonLink
                      key={action._id}
                      analyticsKey={eventsKey}
                      href={action.href}
                      intent={action.type}
                      name="cta_click"
                      size="lg"
                    >
                      {action.label}
                    </TrackedButtonLink>
                  ))
                : null}
            </div>
          </div>
          {/* Gradient */}
          <div
            className={clsx(
              "absolute -top-1/2 left-1/2 z-0 h-[400px] w-[60vw] -translate-x-1/2 scale-150 rounded-[50%]",
              s.gradient,
            )}
          />
        </Section>
      )
    }
    default: {
      return null
    }
  }
}

function LogoLite() {
  return <img src="/generic-sports-club-logo.png" alt="AIK Logo" className="size-20" width={80} height={80} />
}
