import { useState } from "react";
import { Input } from "@/components/ui/input";
import { AutoCarousel } from "@/components/AutoCarousel";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-2xl font-light h-14 border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground"
          />
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-lg font-light h-12 border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground"
          />
        </div>

        <AutoCarousel />
      </div>
    </div>
  );
};

export default Index;
