"use client"

import type React from "react"

import { Button, ButtonLink } from "../common/button"

interface TrackProps {
  analyticsKey?: string
  name: string
}

type TrackedButtonProps = React.ComponentProps<typeof Button> & TrackProps

export const TrackedButton = ({ analyticsKey, children, onClick, name, ref, ...props }: TrackedButtonProps) => {
  return (
    <Button
      {...props}
      ref={ref}
      onClick={(e) => {
        // removed BaseHub event tracking, replaced with console log
        console.log("Button clicked:", name)
        if (onClick) {
          onClick(e)
        }
      }}
    >
      {children}
    </Button>
  )
}

type TrackedButtonLinkProps = React.ComponentProps<typeof ButtonLink> & TrackProps

export const TrackedButtonLink = ({ analyticsKey, children, onClick, name, ref, ...props }: TrackedButtonLinkProps) => {
  return (
    <ButtonLink
      {...props}
      ref={ref}
      onClick={(e) => {
        // removed BaseHub event tracking, replaced with console log
        console.log("Button link clicked:", name)
        if (onClick) {
          onClick(e)
        }
      }}
    >
      {children}
    </ButtonLink>
  )
}
