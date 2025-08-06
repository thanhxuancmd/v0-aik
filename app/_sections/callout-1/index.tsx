"use client";

import { Button } from "@/components/ui/button";

export function Callout() {
  return (
    <section className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Callout</h2>
      <Button>Action</Button>
    </section>
  );
}

export const calloutFragment = {
  title: true,
  description: true,
};
