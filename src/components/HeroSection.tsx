import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section className="pt-32 sm:pt-36 pb-12 sm:pb-16 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="flex justify-center mb-6 sm:mb-8">
          <Avatar className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-accent shadow-2xl">
            <AvatarImage src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop" alt="Fabiana" />
            <AvatarFallback className="bg-secondary text-2xl font-bold">FB</AvatarFallback>
          </Avatar>
        </div>
        
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-accent mb-4 sm:mb-6 uppercase tracking-wider leading-tight">
          A Revolução da Fisioterapia
        </h1>
        
        <p className="text-base sm:text-xl text-foreground/90 leading-relaxed font-medium">
          Seja um fisioterapeuta de alto nível, mais rápido e para sempre.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
