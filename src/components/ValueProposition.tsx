// Replace ValueProposition with demo grid feature cards component
import DemoOne from '@/components/ui/demo-grid-feature-cards';

// ValueProposition simply re-exports the demo grid so the section rendered by
// DemoOne becomes the semantic section child of <main className="site-sections">.
export default function ValueProposition() {
  return <DemoOne />;
}
