import React from "react";
import InteractiveSelector from "@/components/ui/interactive-selector";

export default function Portfolio() {
  return (
    <section id="portafolio" className="relative bg-transparent py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveSelector />
      </div>
    </section>
  );
}
