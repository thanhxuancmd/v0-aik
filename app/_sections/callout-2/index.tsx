"use client";

import { Button } from "@/components/ui/button";

export function Callout2() {
  return (
    <section className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Enterprise Ready</h2>
      <Button>Contact sales</Button>
    </section>
  );
}

export const calloutv2Fragment = {
  title: true,
  description: true,
};
