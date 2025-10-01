import { AutoCarousel } from "@/components/AutoCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-2xl font-light border-b border-border pb-2">REBECCA CAI</h1>
          <h2 className="text-lg font-light border-b border-border pb-2">email@placeholder</h2>
        </div>

        <AutoCarousel />
      </div>
    </div>
  );
};

export default Index;
