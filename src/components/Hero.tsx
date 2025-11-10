import SyntheticHero from "@/components/ui/synthetic-hero";

const Hero = () => {
  return (
    <SyntheticHero
      title="Elaris Digital Solutions"
      description="Experience a new dimension of interaction — fluid, tactile, and alive. Designed for creators who see beauty in motion."
      badgeLabel="Studio"
      badgeText="Electric Blue Interfaces"
      ctaButtons={[
        { text: "Portfolio", href: "#portafolio", primary: true },
        { text: "About Us", href: "#nosotros" },
      ]}
      microDetails={[
        "Vision-driven product strategy",
        "Interactive storytelling in motion",
        "AI-enhanced experiences built for scale",
      ]}
    />
  );
};

export default Hero;
