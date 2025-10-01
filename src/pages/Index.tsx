import { useState } from "react";
import { Input } from "@/components/ui/input";
import { AutoCarousel } from "@/components/AutoCarousel";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <Input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-center text-2xl font-light h-14 border-border bg-background"
          />
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-center text-lg font-light h-12 border-border bg-background"
          />
        </div>

        <AutoCarousel />
      </div>
    </div>
  );
};

export default Index;
