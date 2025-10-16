import { AutoCarousel } from "@/components/AutoCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-2xl name-title font-light">REBECCA CAI</h1>
          <h2 className="text-lg email-subtitle font-light pb-2">
            email@placeholder
          </h2>
        </div>

        <AutoCarousel />
      </div>
    </div>
  );
};

export default Index;
